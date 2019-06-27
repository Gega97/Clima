import React, {Component} from 'react';

import Sidebar from '../Sidebar/Sidebar.jsx'
import Navbar from '../Navbar/Navbar.jsx';

export default class Instrumento extends Component {
    
    
    render(){
        return(
           <div className="Home">
               <div className="wrapper" id="wrapper">
                    <Sidebar />
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <Navbar 
                                    items={['Crear', 'Duplicar']}/>
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
        )}
}