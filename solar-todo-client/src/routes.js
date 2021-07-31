import React from 'react';
import  {Switch, Route, Redirect} from 'react-router-dom';
import {Home} from "./pages/Home";
import {AuthPage} from "./pages/AuthPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return (
            <Switch>
                <Route path={'/'} exact component={Home}/>
                <Redirect to='/'/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path={'/'} exact component={AuthPage}/>
            <Redirect to='/'/>
        </Switch>
    )

}