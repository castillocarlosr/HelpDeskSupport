import React, { Component } from 'react';
//import { LoginView } from './../../../Models/ViewModels';

export class LoginView extends Component {
    static displayName = LoginView.name;

    constructor(props) {
        super(props);
        //this.state = { login: [], loading: true };
        //this.state = { email: "", password: "" };
        //this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
    }

    componentDidMount() {
        this.UserData();
    }

    static renderUsers(username) {
        return (
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
                    {username.map(login =>
                        <tr key={username.id}>
                            <td>{username.id}</td>
                            <td>{username.name}</td>
                            <td>{username.comments}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let { loggingIn } = this.props;
        let { username, password, submitted } = this.state;
        let contents = this.state.loading ? <p><em>Loading Users....</em></p> : LoginView.renderUsers(this.state.login);

        return (

            <div class="">
                <h1 id="tabelLabel" >HelpDesk Login</h1>
                <h2>Email and password please.....</h2>
                <p>-------------------------------</p>

                {contents}

                <p>-------------------------------</p>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')} >
                        <label asp-for="username" class="form-group">Login email: </label>
                        <input class="form-group" asp-for="username" placeholder="  user@helpdesk.com" />
                        <h5 asp-validation-for="Email"></h5>
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label asp-for="Password" class="form-group">Password: </label>
                        <input class="form-group" asp-for="Password" type="password" placeholder="  123PassWord" />
                    </div>
                    <div>
                        <button className="btn btn-primary"> Login </button>
                        {loggingIn}
                        <link to="/Registration" className="btn btn-link">Register instead</link>
                    </div>
                </form>
            </div>
        );
    }
    async UserData() {
        //that is probably not right route...
        const response = await fetch('../../../Controllers/AccountController');
        const data = await response.json();
        this.setState({ login: data, loading: false });
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

//const connectedLoginPage = connect(mapStateToProps)(LoginView);
//export { connectedLoginPage as LoginView }; 
