import React, {Component} from 'react';
import { withHistory, Link } from 'react-router-dom'
import $ from 'jquery';
import logo from '../Login/LogoIntelix.png'

import '../Sidebar/Sidebar.css';

export default class Sidebar extends Component {

    render(){
        return(
            <div className="Sidebar">
                 <div className="wrapper">
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
                                    <Link to="">Item 3</Link>
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
                    </div>
            </div>
        )
    }
}
