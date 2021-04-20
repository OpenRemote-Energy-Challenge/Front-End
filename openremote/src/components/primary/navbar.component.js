import React, { Component } from 'react';
import {Sidenav, Nav, Icon, Dropdown, Button} from 'rsuite';
import {Link} from "react-router-dom";

export default class NavbarComponent extends Component {
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
                    <Sidenav.Body>
                        <Nav>
                            <Link to="/home" >
                                <Nav.Item eventKey="1" icon={<Icon icon="dashboard" to="/home" />} >
                                    Dashboard
                                </Nav.Item>
                            </Link>
                            <Link to="/analytics" >
                                <Nav.Item eventKey="2" icon={<Icon icon="line-chart" />} >
                                    Analytics
                                </Nav.Item>
                            </Link>
                            <Link to="/users" >
                                <Nav.Item eventKey="3" icon={<Icon icon="group" />} >
                                    Users
                                </Nav.Item>
                            </Link>

                            {showAdminBoard ? (
                                <Dropdown eventKey="4" title="Settings" icon={<Icon icon="gear-circle" />} >
                                    <Dropdown.Item eventKey="4-1">Permissions</Dropdown.Item>
                                    <Dropdown.Item eventKey="4-2">Data</Dropdown.Item>
                                </Dropdown>
                            ) : null}
                            {currentUser ? (
                                <Dropdown eventKey="5" title={currentUser.username} icon={<Icon icon="avatar" />} >
                                    <Dropdown.Item eventKey="5-1" >Profile</Dropdown.Item>
                                    <Dropdown.Item eventKey="5-2">Log-out <Icon icon="exit" /></Dropdown.Item>
                                </Dropdown>
                            ) : (
                                <Nav.Item eventKey="5" icon={<Icon icon="avatar" />} >
                                    Login
                                </Nav.Item>
                            )}
                        </Nav>
                    </Sidenav.Body>
        );
    }
}