import React, {Component} from 'react';
import { withHistory, Link } from 'react-router-dom'

import './Navbar.css';

export default class Navbar extends Component {

    componentDidMount(){
        
    }
    render(){
        return(
            <div className="Navbar">
                <nav class="navbar navbar-expand-sm bg-light">

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Item 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Item 2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Item 3</a>
                    </li>
                </ul>
                </nav>
            </div>
        )
    }
}
