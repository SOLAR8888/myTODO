import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Navbar} from './components/Navbar'
import {Home} from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <div className="container pt-4">
            <Switch>
                <Route path={'/'} exact component={Home}/>
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
