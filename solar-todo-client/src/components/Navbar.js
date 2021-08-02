import React, {useContext} from 'react';
import {AuthContext} from "../context/AuthContext";



export const Navbar = () => {

    const  auth = useContext(AuthContext);
    const logoutHandler = () => {
        auth.logout();
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
