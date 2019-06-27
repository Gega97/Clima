import React, {Component} from 'react';
import { withHistory, Link } from 'react-router-dom'
import $ from 'jquery'
import logo from '../../LogoIntelix.png';
import './Sidebar.css';



export default class Sidebar extends Component {

    render(){
        return(
            
          <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
              <li className="sidebar-brand">
                  <a href="#">
                      <img src={logo}></img>
                  </a>
              </li>
              <li id="GestionUsuarios">
                <Link to="/">Gestión de Usuario</Link>
                  <li className="sub-item">
                    Crear
                  </li>
                  <li className="sub-item">
                    Modificar
                  </li>
              </li>
              <li>
                  <a href="#">Actualización Logo</a>
              </li>
              <li>
                <Link to="/DataUpdate">Actualización de Datos</Link>
              </li>
              <li>
                <Link to="/roles">Roles y Privilegios</Link>
              </li>
              <li>
                <Link to="/parametrization">Parametrización</Link>
              </li>
              <li className="sub-item">
                    Tipo de Componente
                  </li>
                  <li className="sub-item">
                    Tipo de Respuesta
                  </li>
                  <li className="sub-item-chield">
                      Niveles de Respuesta
                  </li>
                  <li className="sub-item">
                    Escalas de Medición
                  </li>
                  <li className="sub-item-chield">
                      Niveles de Respuesta
                   </li>
                  <li className="sub-item">
                    Datos Demográficos
                  </li>
                  <li className="sub-item">
                    Dimensión y Subdimensión
                  </li>
              <li id="Instrumento">
                  <Link to="/instrument">Instrumento</Link>
                  <li className="sub-item">
                    Crear
                  </li>
                  <li className="sub-item">
                    Duplicar
                  </li>
              </li>
              <li>
                <Link to="/reporter">Reporteador</Link>
              </li>
          </ul>
      </div>
      
            
        )
    }
}
