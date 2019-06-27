import React, {Component} from 'react';
import { withHistory, Link } from 'react-router-dom'

import UploadImage from '../UpdateImage/Update.Image.jsx';

import './Navbar.css';

export default class Navbar extends Component {

    render(){
        
        return(
            <div className="Navbar">
                <nav className="navbar navbar-expand-sm bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <UploadImage />
                    </li>&nbsp;
                    <li className="nav-item">
                        <a className="nav-link" href="#menu-toggle" id="menu-toggle"><i class="fa fa-bars"></i></a>
                    </li>
                    {!this.props.items == false ? 
                        this.props.items.map(item => {
                            return <li className="nav-item">
                                        <a className="nav-link" 
                                        href="#">{item}</a>
                                    </li>
                    }) : <li></li>}
                    
                </ul>
                </nav>
            </div>
        )
    }
}
