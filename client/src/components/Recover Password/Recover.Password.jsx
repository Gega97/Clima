import React, {Component} from 'react';
import logo from '../../../src/LogoIntelix.png'

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
                                            <div className="col-md-12">
                                                <input 
                                                type="email" 
                                                className="form-control" 
                                                ref="username"
                                                id="username"
                                                placeholder="Correo"
                                                onChange={this.handleChange} 
                                                required/>
                                            </div>
                                        </div>                                            
                                        <div className="text-center">
                                            <button
                                             type="submit"
                                             className="btn btn-light">Enviar</button>
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