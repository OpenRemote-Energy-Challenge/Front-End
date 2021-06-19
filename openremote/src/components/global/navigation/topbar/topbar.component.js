import React, { Component } from 'react';
import {Header, Navbar} from "rsuite";

export default class TopBarComponent extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showAdminBoard: false,
            currentUser: undefined,
        };
    }

    componentDidMount() {
        // Get the user account here

        // This is temporary and will be replaced with an API service later
        this.setState({
            currentUser: {
                username: "Someone",
                id: "12121212",
                isAdmin: true,
            },
            showAdminBoard: true
        });
    }

    logOut() {
        // Log the user out

        // This is temporary and will be replaced with an API service later
        console.log("Logged out..");
    }

    render() {
        const { currentUser, showAdminBoard } = this.state;
        return (
            <Header>
                <Navbar>
                    <Navbar appearance="inverse">
                        <Navbar.Header>
                            <a className="navbar-brand logo">Openremote</a>
                        </Navbar.Header>
                    </Navbar>
                </Navbar>
            </Header>
        );
    }
}