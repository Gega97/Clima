import React, {Component} from 'react';
import logo from './LogoIntelix.png'

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
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <img src = {logo}></img>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group row">
                                            <label 
                                            htmlFor="username" 
                                            className="col-md-4 col-form-label text-md-right">User</label>
                                            <div className="col-md-6">
                                                <input 
                                                type="text" 
                                                className="form-control" 
                                                ref="username"
                                                id="username"
                                                onChange={this.handleChange} 
                                                required/>
                                            </div>
                                        </div>                                            
                                        <div className="form-group row">
                                            <label
                                            htmlFor="password" 
                                            className="col-md-4 col-form-label text-md-right">Password</label>
                                            <div className="col-md-6">
                                                <input
                                                type="password"
                                                className="form-control"
                                                ref="password" 
                                                id="password"
                                                onChange={this.handleChange}
                                                required />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button
                                             type="submit"
                                             className="btn">Login</button>
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