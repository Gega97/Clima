import React, {Component} from 'react';
import { withHistory, Link } from 'react-router-dom'
import $ from 'jquery';
import './Home.css';
import logo from '../login/LogoIntelix.png'

export default class Home extends Component {
    constructor(){
        super();
    }

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
                                <a href="#">Dashboard</a>
                            </li>
                            <li>
                                <a href="#">Shortcuts</a>
                            </li>
                            <li>
                                <Link to="/overview">Users</Link>
                            </li>
                            <li>
                                <a href="#">Events</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <a href="#menu-toggle" className="btn btn-default" id="menu-toggle">Toggle Menu</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}