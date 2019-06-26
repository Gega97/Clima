import React, {Component} from 'react';
import { withHistory, Link } from 'react-router-dom'
import logo from '../../LogoIntelix.png';
import './Sidebar.css';



export default class Sidebar extends Component {

    render(){
        return(
            
          <div id="sidebar-wrapper">
          <ul class="sidebar-nav">
              <li class="sidebar-brand">
                  <a href="#">
                      <img src={logo}></img>
                  </a>
              </li>
              <li>
                  <a href="#">Inicio</a>
              </li>
              <li>
                  <a href="#">Configuración</a>
              </li>
              <li>
                  <a href="#">Usuarios</a>
              </li>
              <li>
                  <button className="dropdown-btn">
                      Instrumentos
                      <i class="fa fa-caret-down"></i>
                  </button>
                  
              </li>
              <li>
                  <a href="#">Acerca de:</a>
              </li>
              <li>
                  <a href="#">Servicios</a>
              </li>
              <li>
                  <a href="#">Soporte</a>
              </li>
          </ul>
      </div>
      
            
        )
    }
}
