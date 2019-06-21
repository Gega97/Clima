import React, {Component} from 'react';

export default class TwoColumnSection extends Component {
    render(){
        return(
            <div className="TwoColumnSection">
                <div className="container fluid padding">
                    <div className="row padding">
                        <div className="col-md12 col-lg-6">
                            <h2>Por si quieren escribir...</h2>
                            <p>
                                Texto 1
                            </p>
                            <p>
                                Texto 2
                            </p>
                            <p>
                                Texto 3
                            </p>
                           <button className="btn btn-light">
                                Boton
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <p>Otra columna con texto/imagen</p>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
            </div>
        )
    }
}