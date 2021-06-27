import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

// Components
import SidebarComponent from "../../global/navigation/sidebar/sidebar.component";
import {Container, Content, Divider, Header, Placeholder} from "rsuite";
import FooterComponent from "../../global/footer/footer.component";
import {Helmet} from "react-helmet";
import AuthService from "../../../services/user/authentication/auth.service";

export default class UsersComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: undefined,
            isAdmin: false,
            loading: true
        }
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

    render() {
        const { user, isAdmin, loading } = this.state;
        if (user) {
            if (isAdmin) {
                return (
                    <>
                        <Helmet>
                            <title>OpenRemote | Users</title>
                        </Helmet>
                        <Container>
                            <SidebarComponent activeKey="3" />

                            <Container className="container-content">
                                <Header>
                                    <h2>Users</h2>
                                </Header>
                                <Divider />
                                <Content>
                                    <div className="content-inner">
                                        {loading ? (
                                            <Placeholder.Grid rows={5} columns={6} active />
                                        ) : (
                                            <div>
                                                <p>Content</p>
                                                {/* Add users content component here */}
                                            </div>
                                        )}
                                    </div>
                                </Content>
                                <FooterComponent />
                            </Container>
                        </Container>
                    </>
                )
            } else {
                return (
                    <>
                        <Helmet>
                            <title>OpenRemote | No Permission</title>
                        </Helmet>
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
                    </>
                )
            }
        } else {
            return <Redirect to="/login" />
        }
    }
}