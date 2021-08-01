import React, {useEffect, useState} from 'react'
import {useHttp} from "../hooks/http.hook";
import {Toast} from 'bootstrap';


export const AuthPage = () =>{
    const {loading, error, request} = useHttp();

    const [form, setForm] = useState({
        email:'',
        password:''
    });

    useEffect(()=>{

    }, [error])

    const changeHandler = event => {
        setForm({...form, [event.target.name]:event.target.value})
    }

    const registerHandler = async () => {
        try{
            const  data = await request('/api/auth/register','POST', {...form});
            console.log('Data: ', data);
        }
        catch (e){

        }
    }


    return (
        <div>
            <div className="card">
                <h5 className="card-header">Авторизация</h5>
                <div className="card-body">
                    <div className="form-floating mb-3">
                        <input onChange={changeHandler} type="email" className="form-control" id="email" name="email" placeholder="name@example.com"/>
                            <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={changeHandler} type="password" className="form-control" id="password" name="password" placeholder="Password"/>
                            <label htmlFor="password">Password</label>
                    </div>

                    <hr/>

                    <a disabled={loading} className="btn btn-primary m-1">Войти</a>
                    <a onClick={registerHandler} disabled={loading} className="btn btn-outline-primary">Зарегистрироваться</a>
                </div>
            </div>
        </div>
    )
}