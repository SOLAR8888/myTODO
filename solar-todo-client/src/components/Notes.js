import React, {useContext} from 'react';
import {APIContext} from "../context/api/apiContext";

export const Notes = ({notes}) => {

    const {removeNote, updateNote} = useContext(APIContext);


    return (
        <ul className='list-group'>
            {notes.map((note)=>(
                <li
                    className='list-group-item note'
                    key = {note.id}>
                    <div className='note-text'>
                        <strong> {note.text} </strong>
                        <div className='text-info text-sm-start'>{new Date(note.createdAt).toLocaleString()}</div>
                    </div>

                    <div className='buttons'>
                        <button onClick={() => updateNote(note._id, !note.done)} type="button" className={note.done ? "btn btn-success btn-sm mx-1" : "btn btn-outline-success btn-sm mx-1"}>&#128504;</button>
                        <button onClick={() => removeNote(note._id)} type="button" className="btn btn-outline-danger btn-sm mx-1">&times;</button>
                    </div>

                </li>
            ))}

        </ul>
    )
}
