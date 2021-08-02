import React from 'react';

export const Notes = ({notes}) => {

    return (
        <ul className='list-group'>
            {notes.map((note)=>(
                <li
                    className='list-group-item note'
                    key = {note.id}>
                    <div>
                        <strong> {note.text} </strong>
                        <small>{new Date().toLocaleDateString()}</small>
                    </div>

                    <div>
                        <button type="button" className="btn btn-outline-success btn-sm mx-1">&#128504;</button>
                        <button type="button" className="btn btn-outline-danger btn-sm mx-1">&times;</button>
                    </div>

                </li>
            ))}

        </ul>
    )
}
