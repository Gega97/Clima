import React, {Component} from 'react';
import $ from 'jquery';

import Sidebar from '../Sidebar/Sidebar.jsx';


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
                   <div className="sidebar">
                        <Sidebar />
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