import React, {Component} from 'react';
import { withHistory, Link } from 'react-router-dom'

import UploadImage from '../UpdateImage/Update.Image.jsx';

import './Navbar.css';

export default class Navbar extends Component {

    state = {
        page:''
    }

    handleChange = (event) => {
        this.setState({page:event.target.name});
        console.log(this.state);
    }

    render(){
        
        return(
            <div className="Navbar">
                <nav className="navbar navbar-expand-sm bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <UploadImage />
                    </li>&nbsp;
                    <li className="nav-item">
                        <a className="nav-link" href="#menu-toggle" id="menu-toggle"><i className="fa fa-bars"></i></a>
                    </li>
                    {!this.props.items == false ? 
                        this.props.items.map(item => {
                            return <li className="nav-item">
                                        <a className="nav-link" 
                                        href="#"
                                        name={item}
                                        value={this.state.page}
                                        key={item}
                                        onClick={this.handleChange}>{item}</a>
                                    </li>
                    }) : <li></li>}
                    
                </ul>
                </nav>
            </div>
        )
    }
}
