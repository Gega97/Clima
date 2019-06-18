import React, {Component} from 'react';
import axios from 'axios';

export default class UserList extends Component {
    
   state = {
        users:[]
    }

    componentDidMount(){
        this.getUsers();
        
    }

    getUsers(){
        axios.get('http://localhost:5000/overview')
        .then(res => {
            const users = res.data.users;
            this.setState({users})
            
        })
    }

    render(){
        return(
            <div className="UsersList">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                           <div className="card">
                               
                           </div>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }

}