import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Navbar} from './components/Navbar'
import {Home} from "./pages/Home";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {useRoutes} from "./routes";

function App() {
    const routes = useRoutes(false);
  return (
      <AlertState>
        <BrowserRouter>
            <Navbar/>
            <div className="container pt-4">
                <Alert/>
                {/*<Switch>
                    <Route path={'/'} exact component={Home}/>
                </Switch>*/}
                {routes}
            </div>
        </BrowserRouter>
      </AlertState>
  );
}

export default App;
