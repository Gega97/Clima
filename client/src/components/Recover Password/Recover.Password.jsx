import React, {Component} from 'react';
import logo from '../Login/LogoIntelix.png'

import './Recover.Password.css';

export default class RecoverPassword extends Component {
    
    render(){
        return(
            <div className="RecoverPassword">
                <div className="container">
                    <div className="row justify-content-center align-items-center" id="center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header text-center">
                                    <img src = {logo}></img>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group row">
                                            <label 
                                            htmlFor="username" 
                                            className="col-md-4 col-form-label text-md-right">Email:</label>
                                            <div className="col-md-6">
                                                <input 
                                                type="email" 
                                                className="form-control" 
                                                ref="username"
                                                id="username"
                                                onChange={this.handleChange} 
                                                required/>
                                            </div>
                                        </div>                                            
                                        <div className="text-center">
                                            <button
                                             type="submit"
                                             className="btn btn-light">Send</button>
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