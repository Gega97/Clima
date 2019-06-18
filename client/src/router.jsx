import React, {Component} from 'react';
import {Router, Switch, Route } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Overview from './components/overview/Overview';
import Home from './components/Home/Home.jsx';
import Login from './components/login/Login.jsx';
import PersonList from './App';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/overview" component={Overview}/>
            <Route path="/login" component={Login}/>
            <Route path="/personlist" component={PersonList}/>
        </Switch>
    </Router>
);