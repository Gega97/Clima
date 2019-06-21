import React, {Component} from 'react';
import { withHistory, Link } from 'react-router-dom'
import $ from 'jquery';
import logo from '../Login/LogoIntelix.png'

export default class Overview extends Component {

    componentDidMount = () => {
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    }

    render(){
        return(
            
           <div className="Home">
               <div id="wrapper" ref="wrapper">
                    <div id="sidebar-wrapper">
                        <ul className="sidebar-nav">
                            <li className="sidebar-brand">
                                <Link to="/"> <img src={logo}></img> </Link>
                            </li>
                            <li>
                                <a href="#">Item 1</a>
                            </li>
                            <li>
                                <a href="#">Item 2</a>
                            </li>
                            <li>
                                <Link to="/overview">Item 3</Link>
                            </li>
                            <li>
                                <a href="#">Item 4</a>
                            </li>
                            <li>
                                <a href="#">Item 5</a>
                            </li>
                            <li>
                                <a href="#">Item 6</a>
                            </li>
                            <li>
                                <a href="#">Item 7</a>
                            </li>
                        </ul>
                    </div>
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-5">
                                    
                                </div>
                                <div className="col-md-5">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}