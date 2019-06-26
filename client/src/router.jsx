import React, {Component} from 'react';
import {Router, Switch, Route } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Login from './components/Login/Login.jsx';
import RecoverPassword from './components/Recover Password/Recover.Password.jsx'
import Home from './components/Home/Home.jsx'

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/recoverPassword" component={RecoverPassword}/>
        </Switch>
    </Router>
);