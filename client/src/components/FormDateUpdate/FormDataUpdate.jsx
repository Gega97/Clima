import React, {Component} from 'react';

export default class FormDateUpdate extends Component {
    render(){
        return(
            <div className="FormDateUpdate">
                <br/>
                <h1>Actualizar Datos</h1>
                <hr className="bg-info"></hr>
                <p>Actualice la estructura organizacional de la empresa</p>
                <form>
                <div className="row form-group">
                    <label className="col-form-label col-md-4" htmlFor="dateUpdate">Fecha última actualización:</label>
                    <div className="col-md-4">
                        <input
                        type="text"
                        id="dateUpdate"
                        ref="dateUpdate"
                        className="form-control"
                        value="29/06/2019"
                        required/>
                    </div>
                </div>
                <div className="col-md-8">
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-light">Actualizar</button>
                        </div>
                    </div>
                </form>
            </div> 
            
        )
    }
}