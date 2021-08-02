import React, {useReducer} from "react";
import {APIContext} from "./apiContext";
import {apiReducer} from "./apiReducer";
import axios from "axios";
import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from "../types";

import {useAuth} from "../../hooks/auth.hook";

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
        console.log('payload',payload)
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
                ...note,
                id:res.data._id
            }

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
        await axios.post(`${baseUrl}/api/note/remove`, note, config)

        dispatch({type: REMOVE_NOTE, payload: id})
    }

    return (
        <APIContext.Provider value={{
           showLoader,  addNote, removeNote, fetchNotes,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </APIContext.Provider>
    )
}
