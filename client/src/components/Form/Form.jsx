import React, {Component} from 'react';

export default class Form extends Component {
    render(){
        return(
            <div className="Form">
                <h1>Agregar Usuarios</h1>
                <hr className="bg-info"></hr>
                <p>Te invitamos a crear usuarios</p>
                <form>
                <div className="row form-group">
                                <label className="col-form-label col-md-4" htmlFor="firstName">First name:</label>
                                <div className="col-md-8">
                                    <input
                                    type="text"
                                    id="first-name"
                                    ref="firstName"
                                    className="form-control"
                                    required/>
                                </div>
                            </div>
                </form>
            </div> 
            
        )
    }
}