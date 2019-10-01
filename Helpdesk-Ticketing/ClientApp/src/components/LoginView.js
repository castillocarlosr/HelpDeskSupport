import React, { Component } from 'react';
//import { LoginView } from './../../../Models/ViewModels';

export class LoginView extends Component {
    static displayName = LoginView.name;

    constructor(props) {
        super(props);
        this.state = { login: [], loading: true };
        //this.state = { email: "", password: "" };
    }

    componentDidMount() {
        this.UserData();
    }

    static renderUsers(login) {
        return(
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Ticket</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Comments</th>
                        </tr>
                </thead>
                <tbody>
                    {login.map(forecast =>
                     <tr key={login.id}>
                      <td>{login.id}</td>
                      <td>{login.name}</td>
                      <td>{login.comments}</td>
                     </tr>
                     )}
                 </tbody>
            </table>
            );
    }
    
    render() {
        let contents = this.state.loading ? <p><em>Loading Users....</em></p> : LoginView.renderUsers(this.state.login);

        return (
            
            <div class="">
                <h1 id="tabelLabel" >HelpDesk Login</h1>
                <h2>Email and password please.....</h2>
                <p>-------------------------------</p>

                {contents}

                <p>-------------------------------</p>
                <form action='/Counter.js' method="post">
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
    async UserData() {
        //that is probably not right route...
        const response = await fetch('../../../Controllers/AccountController');
        const data = await response.json();
        this.setState({login: data, loading: false});
    }
    
}
