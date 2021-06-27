import React, { Component } from "react";

export default class ProfileComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user
        }
    }

    componentDidMount() {
        // Get currently logged in user here.
    }

    render() {
        const { user } = this.state;
        return (
            <div>
                <p><strong>Username:</strong> <span>{user.fullName}</span></p>
                <p><strong>Access Level:</strong> <span>{user.accessLevel}</span></p>
            </div>
        )
    }

}