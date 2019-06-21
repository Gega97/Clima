import React, {Component} from 'react';

export default class Welcome extends Component {
    
    render(){
        return(
            <div className="Welcome">
                <div className="container-fluid padding">
                    <div className="row welcome text-center">
                        <div className="col-12">
                            <h1 className="display-4">Built with ease</h1>
                        </div>
                        <hr />
                        <div className="col-12">
                            <p className="lead">Aqui va un texto para probar que esto funciona.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}