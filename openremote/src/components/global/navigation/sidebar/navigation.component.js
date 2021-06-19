import React, { Component } from 'react';
import { Sidenav, Nav, Icon, Dropdown } from 'rsuite';

export default class NavigationComponent extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            isAdmin: false,
            currentUser: {
                username: "Someone",
                id: "12121212",
                isAdmin: true,
            },
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
        const { currentUser } = this.state;
        return (
            <Sidenav.Body>
                <Nav>
                    <Nav.Item eventKey="1" icon={<Icon icon="dashboard" to="/home" />} href="/home" >
                        Dashboard
                    </Nav.Item>
                    <Nav.Item eventKey="2" icon={<Icon icon="line-chart" />} href="/analytics" >
                        Analytics
                    </Nav.Item>
                    <Nav.Item eventKey="3" icon={<Icon icon="group" />} href="/users" >
                        Users
                    </Nav.Item>
                    {currentUser ? (
                        <Dropdown eventKey="4" title={currentUser.username} icon={<Icon icon="avatar" />} >
                            <Dropdown.Item eventKey="4-1" href="/profile">Profile</Dropdown.Item>
                            <Dropdown.Item eventKey="4-2">Log-out <Icon icon="exit" /></Dropdown.Item>
                        </Dropdown>
                    ) : (
                        <Nav.Item eventKey="4" icon={<Icon icon="avatar" />} >
                            Login
                        </Nav.Item>
                    )}
                </Nav>
            </Sidenav.Body>
        );
    }
}