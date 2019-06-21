import React, {Component} from 'react';
import logo from '../Login/LogoIntelix.png'

export default class Carousel extends Component{
    render(){
        return(
            
                <div className="carousel slide" id="slides" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li className="active" data-target="#slides" data-slide-to="0"></li>
                        <li data-target="#slides" data-slide-to="1"></li>
                        <li data-target="#slides" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={logo}></img>
                            <div className="carousel-caption">
                                <h1 className="display-2">Home</h1>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img src={logo}></img>
                            <div className="carousel-caption">
                                <h1 className="display-2">Home</h1>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img src={logo}></img>
                            <div className="carousel-caption">
                                <h1 className="display-2">Home</h1>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}