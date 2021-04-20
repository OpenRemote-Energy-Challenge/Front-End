import React, { Component } from "react";

// Components
import PrimaryGraph from './dashboard/primarygraph.component';

export default class DashboardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            isAdmin: false
        };
    }

    componentDidMount() {
        // Get the user account here

        // This is temporary and will be replaced with an API service later
        this.setState({
            user: {
                username: "Someone",
                id: "12121212",
                isAdmin: true,
            },
            isAdmin: true
        });
    }

    render() {
        return (
            <div>
                <h1>This is the dashboard</h1>
                <PrimaryGraph />
            </div>
        )
    }
}