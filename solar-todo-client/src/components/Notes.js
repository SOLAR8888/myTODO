import React, {useContext, useState} from 'react';
import {APIContext} from "../context/api/apiContext";
import {AuthContext} from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import {Droppable, Draggable} from "react-beautiful-dnd";


export const Notes = ({notes, filter}) => {

    library.add(faCheck,faTimes);

    const {removeNote, updateNote} = useContext(APIContext);

    const {token} = useContext(AuthContext);

    const [loadID, setLoadID] = useState('');
    const [load, setLoad] = useState(false);

    const onCheckClick = async (note ,token) => {
        const {_id, done, order} = note;
        setLoad(true);
        setLoadID(_id);
        await updateNote(_id, !done, order, token);
        setLoad(false);
        setLoadID('');
    }

    const onRemoveClick = async (id, token) => {
        setLoad(true);
        setLoadID(id);
        await removeNote(id, token);
        setLoad(false);
        setLoadID('');
    }


    return (
        <Droppable droppableId='notes'>
            {
                provided => (
                    <ul className='list-group'
                        ref = {provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {notes
                            .map(note => {
                                if(!note.order) note.order = 0;
                                return note
                            })
                            .sort((a,b) => (a.order - b.order))
                            .filter(note => {
                            switch (filter){
                                case 0:
                                    return true;
                                case 1:
                                    return note.done;
                                case 2:
                                    return !note.done;
                            }
                            return true;
                        }).map((note,index)=>(
                            <Draggable draggableId={note._id} index={index} key={note._id}>
                                {provided => (
                                    <li
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref = {provided.innerRef}
                                        className='list-group-item note'
                                        key = {note.id}>
                                        <div className='note-text'>
                                            <strong style={note.done ? {textDecoration:'line-through'} : {}}> {note.text} </strong>
                                            <div className='text-info text-sm-start'>{new Date(note.createdAt).toLocaleString()}</div>
                                        </div>

                                        <div className='buttons'>
                                            <button onClick={() => onCheckClick(note, token)}  className={note.done ? "btn btn-success btn-sm mx-1" : "btn btn-outline-success btn-sm mx-1"}>
                                                {/*&#128504;*/}

                                                {(!load || loadID !== note._id) &&
                                                <FontAwesomeIcon className='fa-fw' icon="check" />
                                                }
                                                {load && loadID === note._id &&
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                }

                                            </button>
                                            <button onClick={() => onRemoveClick(note._id, token)} data-bs-toggle="modal" data-bs-target="#modal"  type="button" className="btn btn-outline-danger btn-sm mx-1">
                                                {/*&times;*/}
                                                {(!load || loadID !== note._id) &&
                                                <FontAwesomeIcon className='fa-fw' icon="times" />
                                                }
                                                {load && loadID === note._id &&
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                }
                                            </button>
                                        </div>

                                    </li>
                                )}

                            </Draggable>

                        ))}
                        {provided.placeholder}
                    </ul>
                )

            }

        </Droppable>

    )
}
