import React from 'react';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import RegdSuccess from './components/registration/RegdSuccess';
import Welcome from './components/login/Welcome';
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";

export default function Routing(){
    return(
        <HashRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/regdsuccess" component={RegdSuccess} />
            <Route exact path="/welcome" component={Welcome} />
        </Switch>
    </HashRouter>
    )
}