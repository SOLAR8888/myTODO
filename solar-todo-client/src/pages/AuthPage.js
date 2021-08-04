import React, {useContext, useEffect, useState, Fragment} from 'react'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";


export const AuthPage = () =>{
    const auth = useContext(AuthContext);
    const message = useMessage();
    const {loading, error, request, clearError} = useHttp();

    const [form, setForm] = useState({
        email:'',
        password:''
    });

    useEffect(()=>{
        message(error);
        clearError();
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]:event.target.value})
    }

    const registerHandler = async () => {
        try{
            const  data = await request('/api/auth/register','POST', {...form});
            message(data.message);
        }
        catch (e){

        }
    }

    const loginHandler = async () => {
        try{
            const  data = await request('/api/auth/login','POST', {...form});
            auth.login(data.token, data.userId);
        }
        catch (e){

        }
    }


    return (
        <Fragment>
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

                    <button  onClick={loginHandler} disabled={loading} className="btn btn-primary m-1">Войти</button>
                    <button  onClick={registerHandler} disabled={loading} className="btn btn-outline-primary">Зарегистрироваться</button>
                </div>
            </div>
        </Fragment>
    )
}
