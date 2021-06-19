import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

// Components
import SidebarComponent from "../../global/navigation/sidebar/sidebar.component";
import {Container, Content, Divider, Header} from "rsuite";
import FooterComponent from "../../global/footer/footer.component";

export default class UsersComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: "Someone",
                id: "12121212",
                isAdmin: true,
            },
            isAdmin: false
        }
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
        const { user, isAdmin } = this.state;
        if (user) {
            if (isAdmin) {
                return (
                    <Container>
                        <SidebarComponent activeKey="3" />

                        <Container className="container-content">
                            <Header>
                                <h2>Users</h2>
                            </Header>
                            <Divider />
                            <Content>
                                <div className="content-inner">
                                    {/* Add users content component here */}
                                </div>
                            </Content>
                            <FooterComponent />
                        </Container>
                    </Container>
                )
            } else {
                return (
                    <Container>
                        <SidebarComponent activeKey="3" />

                        <Container className="container-content">
                            <Header>
                                <h2>No Permission</h2>
                            </Header>
                            <Divider />
                            <Content>
                                <div className="content-inner">
                                    <p>You don't have permission to view this page</p>
                                </div>
                            </Content>
                            <FooterComponent />
                        </Container>
                    </Container>
                )
            }
        } else {
            return <Redirect to="/login" />
        }
    }
}