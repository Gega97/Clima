import React, {Component} from 'react';
import { withHistory, Link } from 'react-router-dom'
import $ from 'jquery';
import logo from '../Login/LogoIntelix.png'

export default class Navbar extends Component {

    componentDidMount(){
        $(document).ready(() =>{
            $('#sidebarCollapse').on('click', () => {
                $('#sidebar').toggleClass('active');
            })
        })
    }
    render(){
        return(
            <div className="Navbar">
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                   <button className="btn btn-info" id="sidebarCollapse" type="button">
                        <i className="fas fa-align-justify"></i><span>Toggle Sidebar</span>
                   </button>
                   <a className="navbar-brand" href="#">Navbar</a>
                   <button className="navbar-toggler"
                   type="button"
                   data-toggle="collapse"
                   data-target="#navbarNav"
                   aria-controls="navbarNav"
                   aria-expanded="false"
                   aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarNav">
                       <ul className="navbar-nav">
                            <li className="navbar-item active">
                                <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="navbar-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="navbar-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                       </ul>
                   </div>
               </nav>
            </div>
        )
    }
}