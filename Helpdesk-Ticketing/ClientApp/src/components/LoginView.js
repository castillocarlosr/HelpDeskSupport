import React, { Component } from 'react';

import { setAccessToken, setUser, isLoggedIn } from './helpers';




export class LoginView extends Component {
    static displayName = LoginView.name;

    constructor(props) {
        super(props);
        this.state = { login: '', password: '', loggedIn: isLoggedIn() };
        //this.state = { email: "", password: "" };
        //use map in render
        //{this.state.login.map(login => key = { login.username });}
    }



    handleOnChange(event) {
        this.setState({ [event.target.id]: event.target.value, errors: [] });
    }

    prepareFormData(data = this.state) {
        return {
            UserName: data.userName.trim(),
            Password: data.password.trim()
        };
    }

    loginUser(event) {

        var data = JSON.stringify(this.prepareFormData());

        // Send POST request with data submited from form
        fetch('Models/ViewModels/UserViewModel', {
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


                <form onSubmit={this.loginUser} action='tickets-view'>
                    <div className={'form-group mx-sm-3 mb-2'}>
                        <label asp-for="userName" htmlFor="userName" class="form-group">Login email: </label>
                        <input class="form-group" asp-for="userName" placeholder="  user@helpdesk.com"  />
                        <h5 asp-validation-for="Email"></h5>
                        {
                            <div className="help-block">UserName is required</div>
                        }
                    </div>
                    <div className={'form-group mx-sm-3 mb-2'}>
                        <label asp-for="password" htmlFor="password" class="form-group">Password: </label>
                        <input class="form-group" asp-for="password" type="password" placeholder="  123PassWord" />
                        {
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <button type="submit" className="btn btn-primary" onChange={this.handleOnChange}> Login </button>


                </form>
                <h6>Welcome: {this.UserData}</h6>
      
            </div>

        );
    }
}



