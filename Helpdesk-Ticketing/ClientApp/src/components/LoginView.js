import React, { Component } from 'react';
//import { LoginView } from './../../../Models/ViewModels';

export class LoginView extends Component {
    static displayName = LoginView.name;

    constructor(props) {
        super(props);
        this.state = { login: [], loading: true };
        //this.state = { email: "", password: "" };
    }
    
    render() {
        return (
            
            <div class="">
                <h1 id="tabelLabel" >HelpDesk Login</h1>
                <h2>Email and password please.....</h2>
                <p>This component demonstrates fetching data from the server.</p>

                
                {LoginView}
                <form action='' method="post">
                    <div class="form-group">
                        <label asp-for="Email" class="form-group">Login email: </label>
                        <input class="form-group" asp-for="Email" placeholder="  user@helpdesk.com"/>
                        <h5 asp-validation-for="Email"></h5>
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                        <label asp-for="Password" class="form-group">Password: </label>
                        <input class="form-group" asp-for="Password" type="password" placeholder="  123PassWord" /> 
                    </div>
                    <button type="submit" className="btn btn-primary"> Login </button>
                </form>
            </div>
        );
    }
}
