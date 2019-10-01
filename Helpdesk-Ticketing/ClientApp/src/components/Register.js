import React, { Component } from 'react';
//import { LoginView } from './../../../Models/ViewModels';

export class LoginView extends Component {
    //static displayName = Register.name;

    constructor(props) {
        super(props);
        this.state = { register: [], loading: true };
        //this.state = { email: "", password: "" };
    }

    render() {
        return (

            <div class="">
                <h1 id="tabelLabel" >HelpDesk Login</h1>
                <h2>Email, password, and confirm password please.....</h2>
                <p>This component demonstrates fetching data from the server.</p>


                {LoginView}
                <form className="form-horizontal" action='' method="post">
                    <div class="form-group">
                        <label asp-for="Email" class="form-group">Registration email: </label>
                        <input class="form-group" asp-for="Email" placeholder="  user@helpdesk.com" />
                        <h5 asp-validation-for="Email"></h5>
                    </div>
                    <div class="control-group">
                        <label asp-for="Password" class="form-group">Password: </label>
                        <input class="form-group" asp-for="Password" type="password" id="password" placeholder="  123PassWord" />
                    </div>
                    <div class="control-group">
                        <label asp-for="Password" class="form-group">Confirm Password: </label>
                        <input class="form-group" asp-for="Password" type="password" id="password_confirm" placeholder="  123PassWord" />
                    </div>
                    <button type="submit" className="btn btn-primary"> Register! </button>
                </form>
            </div>
        );
    }
}
