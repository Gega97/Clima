import React, {Component} from 'react';
import axios from 'axios';

export default class UserForm extends Component {
    constructor(){
        super();
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            company:'',
            password:''
        };
    }

    handleChange = () => {
        
        const firstName = this.refs.firstName.value;
        const lastName = this.refs.lastName.value;
        const email = this.refs.email.value;
        const company = this.refs.company.value;
        const password = this.refs.password.value;

        this.setState({
            firstName:firstName,
            lastName:lastName,
            email:email,
            company:company,
            password:password
        });
    }

    addUser = (event) => {
        
        event.preventDefault();
        axios.post('http://localhost:5000/overview', {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            company:this.state.company,
            password:this.state.password
        })
        .then(res => {
            console.log(res);
            this.setState({
                firstName:'',
                lastName:'',
                email:'',
                company:'',
                password:''
            });
            console.log(this.state);
        })
        .catch(err => console.log(err));
    
    }

    render(){
    return(
        <div className="UserForm">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Add Users</h1>
                        <hr className="bg-info"></hr>
                        <p>Te invitamos a crear usuarios</p>
                        <form onSubmit={this.addUser}>
                            <div className="row form-group">
                                <label className="col-form-label col-md-4" htmlFor="firstName">First name:</label>
                                <div className="col-md-8">
                                    <input
                                    type="text"
                                    id="first-name"
                                    ref="firstName"
                                    className="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.firstName}
                                    required/>
                                </div>
                            </div>
                            <div className="row form-group">
                                <label className="col-form-label col-md-4" htmlFor="lastName">Last name:</label>
                                <div className="col-md-8">
                                    <input
                                    type="text"
                                    id="lastName"
                                    ref="lastName"
                                    className="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.lastName}
                                    required/>
                                </div>
                            </div>
                            <div className="row form-group">
                                <label className="col-form-label col-md-4" htmlFor="email">Email:</label>
                                <div className="col-md-8">
                                    <input
                                    type="text"
                                    id="email"
                                    ref="email"
                                    className="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                    required/>
                                </div>
                            </div>
                            <div className="row form-group">
                                <label className="col-form-label col-md-4" htmlFor="company">Company:</label>
                                <div className="col-md-8">
                                    <input
                                    type="text"
                                    id="company"
                                    ref="company"
                                    className="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.company}
                                    required/>
                                </div>
                            </div>
                            <div className="row form-group">
                                <label className="col-form-label col-md-4" htmlFor="password">Password:</label>
                                <div className="col-md-8">
                                    <input
                                    type="text"
                                    id="password"
                                    ref="password"
                                    className="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                    required/>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn">
                                    Submit
                                </button> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    
    )}
}