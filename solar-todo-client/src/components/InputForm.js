import React, {useState, useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {APIContext} from "../context/api/apiContext";
import {AuthContext} from "../context/AuthContext";

export const InputForm = ()=>{
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const {addNote} = useContext(APIContext);

    const {token} = useContext(AuthContext);


    const submitHandler = event => {
        event.preventDefault();
        if (value.trim()){
            //создать заметку
            addNote(value,token);

            setValue('')
        }
        else {
            alert.show('Заметка пустая');
        }

    }

    return (
        <form onSubmit={submitHandler} className='form-inline'>
            <div className='form-group'>
                <div className="input-group">
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Введите текст заметки'
                        value={value}
                        onChange={event => {setValue(event.target.value)}}
                    />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-outline-secondary">Добавить</button>
                    </div>
                </div>
            </div>

        </form>
        )
}
