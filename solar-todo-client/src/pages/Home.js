import React, {Fragment, useContext, useEffect} from 'react';
import {InputForm} from "../components/InputForm";
import {Notes} from "../components/Notes";
import {APIContext} from "../context/api/apiContext";
import {Filter} from "../components/Filter";

import {AuthContext} from "../context/AuthContext";

export const Home = () => {

    const {loading, notes, fetchNotes} = useContext(APIContext);
    const {token} = useContext(AuthContext);

    useEffect(()=>{
        fetchNotes(token);

    }, [])

    return (
        <Fragment>
            <InputForm/>
            <hr/>
            <Filter/>
            <Notes notes={notes}/>
        </Fragment>
    )
}
