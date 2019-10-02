import React, { Component } from 'react';

export class AdminOnly extends Component {
    static displayName = AdminOnly.name;

    constructor(props) {
        super(props);
        //this.state = { currentCount: 4 };
        //this.incrementCounter = this.incrementCounter.bind(this);
    }



    render() {
        return (
            <div>
                <h1>Admin to see all tickets</h1>
                <thead>
                    <tr>
                        <th>
                        </th>
                    </tr>
                </thead>
            </div>
        );
    }
}
