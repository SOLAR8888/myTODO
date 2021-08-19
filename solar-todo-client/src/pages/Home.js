import React, {Fragment, useContext, useEffect, useState} from 'react';
import {InputForm} from "../components/InputForm";
import {Notes} from "../components/Notes";
import {APIContext} from "../context/api/apiContext";
import {Filter} from "../components/Filter";

import {AuthContext} from "../context/AuthContext";

import {DragDropContext} from "react-beautiful-dnd";

export const Home = () => {

    const {loading, notes, fetchNotes, updateNote} = useContext(APIContext);
    const {token} = useContext(AuthContext);

    const [filter, setFilter] = useState(0);

    useEffect(()=>{
        fetchNotes(token);

    }, [])

    const onDragEnd = async (result) => {
        //тут нужно изменить order у note и отправить изменение на сервер
        //после чего отсортировать массив notes по возростанию order
        if (!result.destination) return;
        if(result.destination.index == result.source.index) return;
        let sorted = notes.sort((a,b) => a.order - b.order);
        let note = sorted[result.source.index];
        //нужно order становить как среднее между предыдущей и следующей заметкой на новом месте
        let newOrder;
        if (result.destination.index == 0) newOrder = sorted[0].order - 0.000001;//тащим в начало
        else if (result.destination.index == sorted.length - 1) newOrder = sorted[sorted.length -1].order + 0.000001;//тащим в конец
        else {
            let prevOrder = result.destination.index - result.source.index > 0 ? sorted[result.destination.index].order : sorted[result.destination.index -1].order;
            let nextOrder = result.destination.index - result.source.index > 0 ? sorted[result.destination.index + 1].order : sorted[result.destination.index].order;
            newOrder = (prevOrder + nextOrder)/2;
        }
        note.order = newOrder;//может быть < 0
        await updateNote(note._id, note.done, note.order, token);
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
