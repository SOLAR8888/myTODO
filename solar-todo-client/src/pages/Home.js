import React, {Fragment, useContext, useEffect} from 'react';
import {InputForm} from "../components/InputForm";
import {Notes} from "../components/Notes";
import {APIContext} from "../context/api/apiContext";

export const Home = () => {

    const {loading, notes, fetchNotes} = useContext(APIContext);

    useEffect(()=>{
        fetchNotes();
    }, [])

    return (
        <Fragment>
            <InputForm/>
            <hr/>

            <Notes notes={notes}/>
        </Fragment>
    )
}
