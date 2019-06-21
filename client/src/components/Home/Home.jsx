import React, {Component} from 'react';
import $ from 'jquery';

import logo from '../Login/LogoIntelix.png'

import Navbar from '../Navbar/Navbar.jsx';
import Carousel from '../Carousel/Carousel.jsx'
import Jumbotron from '../Jumbotron/Jumbotron.jsx';
import Welcome from '../Welcome/Welcome.jsx';
import ThreeColumnSection from '../Three Column Section/Three.Column.Section.jsx';
import TwoColumnSection from '../Two Column Section/Two.Column.Section.jsx'
import Cards from '../Cards/Cards.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx';

import './Home.css';




export default class Home extends Component {
    constructor(){
        super();
    }

    componentDidMount(){
        $(document).ready(() =>{
            $('#sidebarCollapse').on('click', () => {
                $('#sidebar').toggleClass('active');
            })
        })
    }
    
    render(){
        return(
            <div className="Home">
                <div className="wrapper">
                    <nav id="sidebar">
                        <div className="sidebard-header">
                            <img src={logo}></img>
                        </div>
                        <Sidebar />
                    </nav>
                    <div className="content">
                        <Navbar />
                    </div>
                </div> 
                <h1>Titulo</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptate dolorem eius consequatur dicta eaque mollitia possimus qui, facilis tenetur doloribus laborum, fugit debitis libero obcaecati perferendis est optio in!</p>
            </div>
        )
    }
}