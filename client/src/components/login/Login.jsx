import React, {Component} from 'react';
import { withHistory, Link } from 'react-router-dom'
import logo from '../../../src/LogoIntelix.png'
import UpdateImage from '../UpdateImage/Update.Image.jsx';

import './Login.css';

export default class Login extends Component {
    
    constructor(){
        super();
    }
    
    state = {
        username:"",
        password:""
    }

    handleChange = (event) => {
        const username = this.refs.username.value;
        const password = this.refs.password.value;
        this.setState({
            username:username,
            password:password
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="Login">
                <div className="container">
                    <div className="row justify-content-center align-items-center" id="center">
                        <div className="col-sm-5">
                            <div className="card">
                                <div className="card-header text-center">
                                    <img src = {logo}></img>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit} className="form">
                                        <div className="form-group row">
                                            <div className="col-sm-8 text-center input">
                                                <input 
                                                type="text" 
                                                className="form-control" 
                                                ref="username"
                                                id="username"
                                                onChange={this.handleChange} 
                                                placeholder="Usuario"
                                                required/>
                                            </div>
                                        </div>                                            
                                        <div className="form-group row">
                                            <div className="col-sm-8 input">
                                                <input
                                                type="password"
                                                className="form-control"
                                                ref="password" 
                                                id="password"
                                                onChange={this.handleChange}
                                                placeholder="Contraseña"
                                                required />
                                            </div>
                                        </div>
                                        <div className="form-group text-center">
                                        <Link to="/recoverPassword">Recuperar contraseña</Link>
                                        </div>
                                        <div className="text-center">
                                            <Link to="/">
                                                <button
                                                type="submit"
                                                className="btn btn-light">Ingresar</button>
                                                </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        
               
            </div>
        )
    }
}