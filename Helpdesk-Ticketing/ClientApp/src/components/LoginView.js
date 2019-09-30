import React, { Component } from 'react';

export class LoginView extends Component {
    static displayName = LoginView.name;

    constructor(props) {
        super(props);
        this.state = { login: [], loading: true };
        //this.state = { email: "", password: "" };
    }
    /*
    static renderLoginView(login) {
        return (
            <form class="form-inline">
                <header class="form-group mb-2">
                    <label for="staticEmail2" class="sr-only">Login Email:</label>
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="user@helpticket.com">
                </header>
                <header class="form-group mx-sm-3 mb-2">
                    <label for="inputPassword2" class="sr-only">Password</label>
                    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
                </header>
                    <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
            </form>
            );
    }
    */
    /*
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    handleSubmit = event => {
        event.preventDefault();
                }
                */
    render() {
        return (
            
            <div class="">
                <h1 id="tabelLabel" >HelpDesk Login</h1>
                <h2>Email and password please.....</h2>
                <p>This component demonstrates fetching data from the server.</p>
                
                {LoginView}
                <form method="post">
                    <div class="form-group">
                        <label asp-for="Email" class="form-group">Login email: </label>
                        <input class="form-group" asp-for="Email" placeholder="  user@helpdesk.com"/>
                        <h5 asp-validation-for="Email"></h5>
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                        <label for="Password" class="form-group">Password: </label>
                        <input class="form-group" asp-for="Password" placeholder="  123PassWord"/> 
                    </div>
                </form>
                <button className="btn btn-primary" >Login</button>
            </div>
            
            /*
            <div>
                <h1>HelpDesk Login</h1>
            </div>
            */
            /*
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >Login
                    </Button>
                </form>
            </div>
            */
        );
    }
}
