import React, { Component } from 'react';

export class LoginView extends Component {
    static displayName = LoginView.name;

    constructor(props) {
        super(props);
        this.state = { login: [], loading: true };
    }

//Fill in somtheing here....

    render() {


        return (
            <div>
                <h1 id="tabelLabel" >Login Something</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}
