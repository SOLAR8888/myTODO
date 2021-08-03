import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Navbar} from './components/Navbar'
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {useRoutes} from "./routes";
import 'materialize-css';
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {APIState} from "./context/api/APIState";



function App() {
    const {token, login, logout, userId} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);
  return (
      <AlertState>
          <AuthContext.Provider value={{token, userId, login, logout, isAuthenticated}}>

                  <APIState>

                        <BrowserRouter>
                            <Navbar/>
                            <div className="container pt-4">
                                <Alert/>

                                {routes}

                            </div>
                        </BrowserRouter>

                  </APIState>

          </AuthContext.Provider>
      </AlertState>
  );
}

export default App;
