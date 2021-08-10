import React, {useContext, useState} from 'react';
import {APIContext} from "../context/api/apiContext";
import {AuthContext} from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";



export const Notes = ({notes, filter}) => {

    library.add(faCheck,faTimes);

    const {removeNote, updateNote} = useContext(APIContext);

    const {token} = useContext(AuthContext);

    const [loadID, setLoadID] = useState('');
    const [load, setLoad] = useState(false);

    const onCheckClick = async (id, done, token) => {

        setLoad(true);
        setLoadID(id);
        await updateNote(id, done, token);
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
        <ul className='list-group'>
            {notes.filter(note => {
                switch (filter){
                    case 0:
                        return true;
                    case 1:
                        return note.done;
                    case 2:
                        return !note.done;
                }
                return true;
            }).map((note)=>(
                <li
                    className='list-group-item note'
                    key = {note.id}>
                    <div className='note-text'>
                        <strong style={note.done ? {textDecoration:'line-through'} : {}}> {note.text} </strong>
                        <div className='text-info text-sm-start'>{new Date(note.createdAt).toLocaleString()}</div>
                    </div>

                    <div className='buttons'>
                        <button onClick={() => onCheckClick(note._id, !note.done, token)}  className={note.done ? "btn btn-success btn-sm mx-1" : "btn btn-outline-success btn-sm mx-1"}>
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
            ))}

        </ul>
    )
}
