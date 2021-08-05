import React, {useContext} from 'react';
import {APIContext} from "../context/api/apiContext";
import {AuthContext} from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";



export const Notes = ({notes, filter}) => {

    library.add(faCheck,faTimes);

    const {removeNote, updateNote} = useContext(APIContext);

    const {token} = useContext(AuthContext);


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
                        <button onClick={() => updateNote(note._id, !note.done, token)} type="button" className={note.done ? "btn btn-success btn-sm mx-1" : "btn btn-outline-success btn-sm mx-1"}>
                            {/*&#128504;*/}
                            <FontAwesomeIcon className='fa-fw' icon="check" />
                        </button>
                        <button onClick={() => removeNote(note._id, token)} type="button" className="btn btn-outline-danger btn-sm mx-1">
                            {/*&times;*/}
                            <FontAwesomeIcon className='fa-fw' icon="times" />
                        </button>
                    </div>

                </li>
            ))}

        </ul>
    )
}
