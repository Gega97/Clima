import React, {Component} from 'react';

import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import './Home.css';

export default class Home extends Component {
   
    render(){
        return(
           <div className="Home">
               <div className="wrapper" id="wrapper">
                    <Sidebar />
                    <div id="page-content-wrapper">
                        <div class="container-fluid">
                            <div class="row">
                                <div className="col s12">
                                    <Navbar />
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-sm-12">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum atque omnis? Ratione exercitationem iusto repellendus. Tenetur in repellat voluptatum quo excepturi quis. Mollitia quos numquam fugiat sequi velit dicta!</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-9">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum atque omnis? Ratione exercitationem iusto repellendus. Tenetur in repellat voluptatum quo excepturi quis. Mollitia quos numquam fugiat sequi velit dicta!</p>
                                </div>
                                <div className="col-sm-3">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum atque omnis? Ratione exercitationem iusto repellendus. Tenetur in repellat voluptatum quo excepturi quis. Mollitia quos numquam fugiat sequi velit dicta!</p>
                                </div>
                            </div>
                        </div>
                     </div>
               </div>
           </div>
        )
    }
}