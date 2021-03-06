import React, {Component} from 'react';
import $ from 'jquery';

import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import FormDateUpdate from '../FormDateUpdate/FormDataUpdate.jsx';

export default class ActualizacionDatos extends Component {

    componentDidMount(){
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    }
   
    render(){
        return(
           <div className="ActualizacionDatos">
               <div className="wrapper" id="wrapper">
                    <Sidebar/>
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col s12">
                                <Navbar
                                    items={['Actualizar']} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-sm-9">
                                    <FormDateUpdate />
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