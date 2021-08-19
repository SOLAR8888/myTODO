import React, {Fragment, useContext, useEffect, useState} from 'react';
import {InputForm} from "../components/InputForm";
import {Notes} from "../components/Notes";
import {APIContext} from "../context/api/apiContext";
import {Filter} from "../components/Filter";

import {AuthContext} from "../context/AuthContext";

import {DragDropContext} from "react-beautiful-dnd";

export const Home = () => {

    const {loading, notes, fetchNotes} = useContext(APIContext);
    const {token} = useContext(AuthContext);

    const [filter, setFilter] = useState(0);

    useEffect(()=>{
        fetchNotes(token);

    }, [])

    const onDragEnd = (result) => {
        console.log(notes);
        [notes[result.source.index], notes[result.destination.index]] = [notes[result.destination.index], notes[result.source.index]]
        console.log(notes);
    }

    return (
        <Fragment>
            <InputForm/>
            <hr/>
            <Filter filter={filter} setFilter={setFilter}/>
            <DragDropContext onDragEnd={onDragEnd}>

                    <Notes notes={notes} filter={filter} />


            </DragDropContext>

        </Fragment>
    )
}
