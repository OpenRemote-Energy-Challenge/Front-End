import React, { Component } from "react";
import {Link} from "react-router-dom";

import { Button } from 'rsuite';

export default class NotfoundComponent extends Component {
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
                <h1>404</h1>
                <h2>Page not found</h2>
                <Link to="/home" >
                    <Button>Dashboard</Button>
                </Link>
                {this.state.user ? (
                    <Link to="/analytics" >
                        <Button>Analytics</Button>
                    </Link>
                ) : (
                    <Link to="/login" >
                        <Button>Login</Button>
                    </Link>
                )}
            </div>
        )
    }
}