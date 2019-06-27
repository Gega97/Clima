import React, {Component} from 'react';
import {Router, Switch, Route } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Login from './components/Login/Login.jsx';
import RecoverPassword from './components/Recover Password/Recover.Password.jsx'
import GestionUsuario from './components/Gestion de Usuario/Gestion.Usuario.jsx'
import Instrumento from './components/Instrumento/Instrumento.jsx'
import Parametrizacion from './components/Parametrizacion/Parametrizacion.jsx'
import RolesPrivilegios from './components/Roles y Privilegios/Roles.Privilegios.jsx';
import ActualizacionDatos from './components/Actualizacon de Datos/Actualizacion.Datos.jsx'
import Reporteador from './components/Reporteador/Reporteador.jsx';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact={true} path="/" component={GestionUsuario}/>
            <Route path="/login" component={Login}/>
            <Route path="/recoverPassword" component={RecoverPassword}/>
            <Route path="/instrument" component={Instrumento}/>
            <Route path="/parametrization" component={Parametrizacion}/>
            <Route path="/roles" component={RolesPrivilegios}/>
            <Route path="/DataUpdate" component={ActualizacionDatos}/>
            <Route path="/reporter" component={Reporteador}/>
        </Switch>
    </Router>
);