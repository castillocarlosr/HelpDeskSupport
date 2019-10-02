import React, { Component } from 'react';

export class Registration extends Component {
    static displayName = Registration.name;

    constructor(props) {
        super(props);
        this.state = { register: [], loading: true };
    }

    componentDidMount() {
        this.UserData();
    }

    static renderUsers(register) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>User:</th>
                        <th>Ticket</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {register.map(forecast =>
                        <tr key={register.id}>
                            <td>{register.id}</td>
                            <td>{register.name}</td>
                            <td>{register.password}</td>
                            <td>{register.confirmpassword}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading ? <p><em>Wating to register user....</em></p> : Registration.renderUsers(this.state.register);

        return (

            <div class="">
                <h1 id="tabelLabel" >HelpDesk Registration</h1>
                <h2>Email, password, and confrim password please.....</h2>
                <p>-------------------------------</p>

                {contents}

                <p>-------------------------------</p>
                <form action='/Counter.js' method="post">
                    <div class="form-group">
                        <label asp-for="Email" class="form-group">Login email: </label>
                        <input class="form-group" asp-for="Email" placeholder="  user@helpdesk.com" />
                        <h5 asp-validation-for="Email"></h5>
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                        <label asp-for="Password" class="form-group">Password: </label>
                        <input class="form-group" asp-for="Password" type="password" placeholder="  123PassWord" />
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                        <label asp-for="ConfirmPassword" class="form-group">Confirm Password: </label>
                        <input class="form-group" asp-for="ConfirmPassword" type="password" placeholder="  123PassWord" />
                    </div>
                    <button type="submit" className="btn btn-primary"> REgister </button>
                </form>
            </div>
        );
    }
    async UserData() {
        //that is probably not right route...
        const response = await fetch('../../../Controllers/AccountController');
        const data = await response.json();
        this.setState({ register: data, loading: false });
    }

}
