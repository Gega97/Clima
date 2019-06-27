import React, {Component} from 'react';
import $ from 'jquery';

import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';


export default class RolesPrivilegios extends Component {

    componentDidMount(){
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    }
   
    render(){
        return(
           <div className="RolesPrivilegios">
               <div className="wrapper" id="wrapper">
                    <Sidebar/>
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <Navbar/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-9">
                                
                                </div>
                                <div className="col-sm-3">
                                
                                </div>
                            </div>
                        </div>
                     </div>
               </div>
           </div>
        )
    }
}