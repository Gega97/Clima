import React, {Component} from 'react';

import './Update.Image.css';

export default class UploadImage extends Component {
    
    uploadBtn = () => {
        const realInput = this.refs.realInput;
        realInput.click();
    }
    
    handleChange = () => {

    }

    render(){
        return(
            <div className="UploadImage">
                <input type="file" id="file" accept="image/*" />
                <label htmlFor="file">
                <i class="fa fa-arrow-up"></i>
                    
                </label>
            </div>
        )
    }
}