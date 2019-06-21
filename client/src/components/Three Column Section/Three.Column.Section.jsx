import React, {Component} from 'react';

export default class ThreeColumnSection extends Component {
    render(){
        return(
            <div className="ThreeColumnSection">
                <div className="container-fluid padding">
                    <div className="row text-center padding">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <i className="fas fa-code"></i>
                            <h3>HTML 5</h3>
                            <p>Texto sobre html 5</p>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <i className="fas fa-bold"></i>
                            <h3>Bootstrap</h3>
                            <p>Texto sobre Bootstrap</p>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <i className="fab fa-css3"></i>
                            <h3>CSS 3</h3>
                            <p>Texto sobre Css 3</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        )
    }
}