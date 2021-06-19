import React, { Component } from "react";
import { Placeholder } from 'rsuite';

export default class PermissionsComponent extends Component {
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
                <Placeholder.Grid rows={10} columns={6} active />
            </div>
        )
    }
}