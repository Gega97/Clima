import React, {Component} from 'react';
import { withHistory, Link } from 'react-router-dom'

export default class Jumbotron extends Component {
    render(){
        return(
            <div className="Jumbotron">
                <div className="container-fluid">
                    <div className="row jumbotron">
                        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9-col-xl-10">
                            <p>Texto para probar que esto funciona jaja.</p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
                            <Link to="/"><button className="btn btn-outline-secondary btn-lg">Button</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}