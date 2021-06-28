import React, { Component } from 'react';
import { Sidenav, Nav, Icon, Dropdown } from 'rsuite';
import { useHistory } from 'react-router-dom';
import AuthService from "../../../../services/user/authentication/auth.service";

export default class NavigationComponent extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            isAdmin: false,
            user: undefined,
        };
    }

    componentDidMount() {
        // Get user here
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                user: user,
                isAdmin: user.accessLevel === 3
            })
        }
    }

    logOut = () => {
        // Log the user out
        AuthService.logout();
        this.setState({
            isAdmin: false,
            user: undefined
        });
    }

    render() {
        const { user } = this.state;
        return (
            <Sidenav.Body>
                <Nav>
                    <Nav.Item eventKey="1" icon={<Icon icon="dashboard" to="/home" />} href="/home" >
                        Dashboard
                    </Nav.Item>
                    <Nav.Item eventKey="2" icon={<Icon icon="line-chart" />} href="/analytics" >
                        Analytics
                    </Nav.Item>
                    {/*<Nav.Item eventKey="3" icon={<Icon icon="group" />} href="/users" >*/}
                    {/*    Users*/}
                    {/*</Nav.Item>*/}
                    {user ? (
                        <Dropdown eventKey="4" title={user.fullName} icon={<Icon icon="avatar" />} >
                            <Dropdown.Item eventKey="4-1" href="/profile">Profile</Dropdown.Item>
                            <Dropdown.Item eventKey="4-2" onSelect={this.logOut}>Log-out <Icon icon="exit" /></Dropdown.Item>
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