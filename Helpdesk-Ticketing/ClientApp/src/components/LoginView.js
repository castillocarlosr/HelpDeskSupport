import React, { Component } from 'react';
//import { LoginView } from './../../../Models/ViewModels';



export class LoginView extends Component {
    static displayName = LoginView.name;

    constructor(props) {
        super(props);
        this.state = { login: [], username: '', password: '', submitted: true };
        //this.state = { email: "", password: "" };
    }

    componentDidMount() {
        this.UserData();
    }

    static renderUsers(username) {

        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>UserLogin</th>
                        <th>ID</th>
                        <th>Ticket-Name</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {username.map(login =>
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
        let { logginIn } = this.props;
        let { username, password, submitted } = this.state;

        return (

            <div class="">
                <h1 id="tabelLabel" >HelpDesk Login</h1>
                <h2>Email and password please.....</h2>
                <p>-------------------------------</p>
                <p>Seeded data.  Use test users below</p>
                <p>test1@test.com    password1</p>
                <p>test2@test.com    password2</p>

                <p>-------------------------------</p>

                <form onSubmit={this.handleSubmit} action='AdminOnly'>
                    <div className={'form-group mx-sm-3 mb-2' + (submitted && !username ? ' has-error' : '')}>
                        <label asp-for="username" htmlFor="username" class="form-group">Login email: </label>
                        <input class="form-group" asp-for="username" placeholder="  user@helpdesk.com" />
                        <h5 asp-validation-for="Email"></h5>
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group mx-sm-3 mb-2' + (submitted && !password ? ' has-error' : '')}>
                        <label asp-for="password" htmlFor="password" class="form-group">Password: </label>
                        <input class="form-group" asp-for="password" type="password" placeholder="  123PassWord" />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <button type="submit" className="btn btn-primary"> Login </button>
                    {logginIn}
                </form>
                <h6>Welcome: {this.UserData}</h6>
                {contents}
            </div>

        );
    }
    async UserData() {
        //that is probably not right route...
        const response = await fetch('https://localhost:44361/Models/Accountusers');
        const data = await response.json();
        this.setState({ login: data, loading: true });
    }
}



