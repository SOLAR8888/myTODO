import React, {useContext} from 'react';
import {AuthContext} from "../context/AuthContext";
import {AlertContext} from "../context/alert/alertContext";



export const Navbar = () => {

    const alert = useContext(AlertContext);

    const  auth = useContext(AuthContext);
    const logoutHandler = () => {
        auth.logout();
        alert.hide();
    }

    return (
        <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
            <div className='navbar-brand'>
                TODOwe4ka
            </div>
            {auth.isAuthenticated && <button onClick={logoutHandler} type="button" className="btn btn-outline-light m-1">Выйти</button>}
        </nav>
    )
}
