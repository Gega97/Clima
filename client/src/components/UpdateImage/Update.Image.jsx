import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';

import './Update.Image.css';

export default class UploadImage extends Component {
    
    render(){
        return(
            <div className="UploadImage">
                <label htmlFor="file-input">
                    <i className="fas fa-arrow-up" data-tip="Carga tu logo!"></i>
                    <ReactTooltip />
                </label>
                <input id="file-input" type="file"/>
            </div>
        )
    }
}