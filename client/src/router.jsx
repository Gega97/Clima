import React, {Component} from 'react';
import {Router, Switch, Route } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import PersonList from './App';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/personlist" component={PersonList}/>
        </Switch>
    </Router>
);