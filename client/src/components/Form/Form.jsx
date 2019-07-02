import React, {Component} from 'react';
import "./Form.css"

export default class Form extends Component {
    render(){
        return(
            <div className="Form">
                <br/>
                <h1>Agregar Usuarios</h1>
                <hr className="bg-info"></hr>
                <p>Te invitamos a crear usuarios</p>
                <form>
                    <div className="row form-group">
                        <label className="col-form-label col-md-2" htmlFor="company">Unidad de Negocio:</label>
                        <div className="col-md-6">
                            <select className="form-control input-vcenter" id="company">
                                <option>Seleccionar</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="row form-group">
                        <label className="col-form-label col-md-2" htmlFor="firstName">Nombre:</label>
                        <div className="col-md-6">
                            <input
                            type="text"
                            id="first-name"
                            ref="firstName"
                            className="form-control"
                            
                            required/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <label className="col-form-label col-md-2" htmlFor="lastName">Apellidos:</label>
                        <div className="col-md-6">
                            <input
                            type="text"
                            id="last-name"
                            ref="lastName"
                            className="form-control"
                            
                            required/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <label className="col-form-label col-md-2" htmlFor="email">Correo:</label>
                        <div className="col-md-6">
                            <input
                            type="text"
                            id="email"
                            ref="email"
                            className="form-control"
                            
                            required/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <label className="col-form-label col-md-2" htmlFor="password">Contraseña:</label>
                        <div className="col-md-6">
                            <input
                            type="password"
                            id="password"
                            ref="password"
                            className="form-control"
                            
                            required/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <label className="col-form-label col-md-2" htmlFor="userName">Username:</label>
                        <div className="col-md-6">
                            <input
                            type="text"
                            id="userName"
                            ref="userName"
                            className="form-control"
                            
                            required/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <label className="col-form-label col-md-2" htmlFor="role">Rol:</label>
                        <div className="col-md-6">
                            <select class="form-control" id="role">
                                <option>Seleccionar</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="col-md-8">
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-light">Guardar</button>
                        </div>
                    </div>
                </form>
            </div> 
            
        )
    }
}