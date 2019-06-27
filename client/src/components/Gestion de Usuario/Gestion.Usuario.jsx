import React, {Component} from 'react';
import $ from 'jquery';

import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import './Gestion.Usuario.css';

export default class GestionUsuario extends Component {

    componentDidMount(){
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    }
   
    render(){
        return(
           <div className="GestionUsuario">
               <div className="wrapper" id="wrapper">
                    <Sidebar/>
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col s12">
                                    <Navbar
                                    items={['Crear', 'Modificar']} />
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