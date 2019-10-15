﻿import React, { Component } from 'react';

import { setAccessToken, setUser, isLoggedIn } from './helpers';




export class RegistrationView extends Component {
    static displayName = RegistrationView.name;

    constructor(props) {
        super(props);
        this.state = { newRegister: '', newPassword: '', newConfirmPassword: '', loggedIn: false };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); //added oct 14
        this.prepareFormData = this.prepareFormData.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.checkStatus = this.checkStatus.bind(this);
    }

    /*
    handleOnChange(event) {
        this.setState({ [event.target.id]: event.target.value, errors: [] });
    }
    */

    handleOnChange(event) {
        const target = event.target;
        const name = target.name;
    }

    handleSubmit(event) {
        alert('You have registered:  ' + this.state.newRegister);
    }

    prepareFormData(data = this.state) {
        return {
            UserName: data.userName.trim(),
            Password: data.password.trim(),
            ConfirmPassword: data.confirmpassword.trim()
        };
    }

    registerUser(event) {

        var data = JSON.stringify(this.prepareFormData());

        // Send POST request with data submited from form
        fetch('Register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: data
        })
            .then(this.checkStatus);
    }

    checkStatus(res) {
        if (res.status >= 200 && res.status < 300) {
            setAccessToken(res.access_token);
            setUser(this.state.userName);
            this.setState({ loggedIn: true });
            this.props.history.push('/User1');
        } else {
            let error = new Error(res.statusTest);
            console.log(error);
            this.props.history.push('/Counter');
        }
    }




    render() {
        if (this.state.loggedIn) {
            window.location.replace("/");
            return true;
        }
        //let contents = this.state.loading ? <p><em>Loading Users....</em></p> : LoginView.renderUsers(this.state.login);
        //let { logginIn } = this.props;
        //let { username, password, submitted } = this.state;

        return (

 
            <div class="">
                <h1 id="tabelLabel" >HelpDesk Login</h1>
                <h2>Email and password please.....</h2>
                <p>-------------------------------</p>
                <p>Seeded data.  Use test users below</p>
                <p>test1@test.com    password1</p>
                <p>test2@test.com    password2</p>
                <p>admin@helpdeskteammember.com    password3</p>

                <p>-------------------------------</p>


                <form onSubmit={this.handleSubmit} action='tickets-view'>
                    <div className={'form-group mx-sm-3 mb-2'}>
                        <label asp-for="userName" htmlFor="userName" class="form-group">Login email: </label>
                        <input name="newRegister" value={this.state.newRegister} type="text" newRegister={this.state.newRegister} onChange={this.handleOnChange} class="form-group" placeholder="  user@helpdesk.com" />
                        <h5 asp-validation-for="Email"></h5>
                        {
                            <div className="help-block">UserName is required</div>
                        }
                    </div>
                    <div className={'form-group mx-sm-3 mb-2'}>
                        <label asp-for="password" htmlFor="password" class="form-group">Password: </label>
                        <input name="newPassword" value={this.state.newPassword} class="form-group" type="password" onChange={this.handleOnChange} placeholder="  123PassWord" />
                        {
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className={'form-group mx-sm-3 mb-2'}>
                        <label asp-for="confirmpassword" htmlFor="confirmpassword" class="form-group">Confirm Password: </label>
                        <input name="newConfirmPassword" value={this.state.newConfirmPassword} class="form-group" type="password" onChange={this.handleOnChange} placeholder="  123PassWord" />
                        {
                            <div className="help-block">Confirmation Password is required</div>
                        }
                    </div>
                    <button type="submit" className="btn btn-primary" > Resigster </button>


                </form>
                <h6>Welcome: {this.UserData}</h6>
                <select>
                    <option>Feeling AWESOME!</option>
                    <option>Feeling Good.</option>
                    <option>Feeling ordinary.</option>
                </select>
      
            </div>

        );
    }
}



