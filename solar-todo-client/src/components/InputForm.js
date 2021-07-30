import React, {useState, useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";

export const InputForm = ()=>{
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);

    const submitHandler = event => {
        event.preventDefault();
        if (value.trim()){
            //создать заметку
            alert.show('Заметка создана', 'success');
            setValue('')
        }
        else {
            alert.show('Заметка пустая');
        }

    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Введите текст заметки'
                    value={value}
                    onChange={event => {setValue(event.target.value)}}
                />
            </div>
        </form>
        )
}