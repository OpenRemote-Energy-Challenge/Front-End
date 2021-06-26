import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

// Components
import SidebarComponent from "../../global/navigation/sidebar/sidebar.component";
import {Container, Content, Divider, Header, Placeholder} from "rsuite";
import FooterComponent from "../../global/footer/footer.component";
import {Helmet} from "react-helmet";
import AuthService from "../../../services/user/authentication/auth.service";

export default class UserComponent extends Component {
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
        const { user, loading } = this.state;
        if (user) {
            return (
                <>
                    <Helmet>
                        <title>OpenRemote | {user.username}</title>
                    </Helmet>
                    <Container>
                        <SidebarComponent activeKey="4-1" openKey="4" />

                        <Container className="container-content">
                            <Header>
                                <h2>Profile - {user.username}</h2>
                            </Header>
                            <Divider />
                            <Content>
                                <div className="content-inner">
                                    {loading ? (
                                        <Placeholder.Graph active />
                                    ) : (
                                        <div>
                                            <p>Content</p>
                                            {/*<ProfileComponent username={user.username} />*/}
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
            return <Redirect to="/login" />
        }
    }
}