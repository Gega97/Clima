import React, {Component} from 'react';

export default class Cards extends Component {
    render(){
        return(
            <div className="Cards">
                <div className="container-fluid padding">
                    <div className="row padding">
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src=""></img>
                                <div className="card-body">
                                    <h4 className="card-title">Titulo</h4>
                                    <p className="card-text">Texto de prueba</p>
                                    <button className="btn btn-outline-secundary" type="button">Ir...</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src=""></img>
                                <div className="card-body">
                                    <h4 className="card-title">Titulo</h4>
                                    <p className="card-text">Texto de prueba</p>
                                    <button className="btn btn-outline-secundary" type="button">Ir...</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src=""></img>
                                <div className="card-body">
                                    <h4 className="card-title">Titulo</h4>
                                    <p className="card-text">Texto de prueba</p>
                                    <button className="btn btn-outline-secundary" type="button">Ir...</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}