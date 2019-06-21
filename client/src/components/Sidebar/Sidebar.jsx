import React, {Component} from 'react';
import { withHistory, Link } from 'react-router-dom'
import $ from 'jquery';


export default class Sidebar extends Component {

    componentDidMount(){
        $(document).ready(() =>{
            $('#sidebarCollapse').on('click', () => {
                $('#sidebar').toggleClass('active');
            })
        })
    }

    render(){
        return(
            <div className="Sidebar">
               <ul className="list-unstyled components">
                   <p>Texto de prueba</p>
                   <li className="active">
                        <a href="#homeSubmenu" 
                        data-toggle="collapse" 
                        aria-expanded="false" 
                        className="dropdown-toggle">Home</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">Item 1</a>
                            </li>
                            <li>
                                <a href="#">Item 1</a>
                            </li>
                            <li>
                                <a href="#">Item 1</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#pageSubmenu" 
                        data-toggle="collapse" 
                        aria-expanded="false" 
                        className="dropdown-toggle">Home</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href="#">page 1</a>
                            </li>
                            <li>
                                <a href="#">page 1</a>
                            </li>
                            <li>
                                <a href="#">page 1</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
               </ul>
               <ul className="list-unstyled">
                    <li>
                        <a href="#" className="download">Download</a>
                    </li>
                    <li>
                        <a href="#" className="article">Article</a>
                    </li>
               </ul>
            </div>
        )
    }
}
