import React, {useContext, useReducer} from "react";
import {APIContext} from "./apiContext";
import {apiReducer} from "./apiReducer";
import axios from "axios";
import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER, UPDATE_NOTE} from "../types";

import {useAuth} from "../../hooks/auth.hook";
import {AlertContext} from "../alert/alertContext";

const baseUrl = process.env.API_BASE || 'http://localhost:5000';

export const APIState = ({children}) =>{
    const initialState = {
        notes:[],
        loading:false
    }
    const {token} = useAuth();
    const config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }

    const alert = useContext(AlertContext);

    const [state, dispatch] = useReducer(apiReducer, initialState);

    const showLoader = () => dispatch({type:SHOW_LOADER});

    const fetchNotes = async () => {
        showLoader();
        const res = await axios.get(`${baseUrl}/api/note/`, config);

        const payload = Object.keys(res.data).map(key => {
            return {
                ...res.data[key],
                id:key
            }
        })

        dispatch({
            type:FETCH_NOTES,
            payload
        })
    }

    const addNote = async text => {
        const note = {
            text
        }
        try{
            const res = await axios.post(`${baseUrl}/api/note/add`, note, config)

            const payload = {
                ...res.data.note,
                id:res.data.note._id
            }
            if (res.status === 200) alert.show('Заметка создана', 'success');

            dispatch({type:ADD_NOTE, payload})
        }
        catch (e) {
            throw new Error(e.message)
        }

    }

    const removeNote = async id => {
        const note = {
            id
        }
        const res = await axios.post(`${baseUrl}/api/note/remove`, note, config)

        if (res.status === 200) alert.show('Заметка удалена', 'warning');
        dispatch({type: REMOVE_NOTE, payload: id})
    }

    const updateNote = async (id, flag) => {
        const note = {
            id,
            done:flag
        }
        const res = await axios.post(`${baseUrl}/api/note/update`, note, config)

        if (res.status === 200) alert.show('Заметка обновлена', 'success');
        dispatch({type:UPDATE_NOTE, payload:{id, flag}})
    }

    return (
        <APIContext.Provider value={{
           showLoader,  addNote, removeNote, fetchNotes, updateNote,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </APIContext.Provider>
    )
}
