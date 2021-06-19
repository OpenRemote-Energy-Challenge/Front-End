import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

// Components
import SidebarComponent from "../../global/navigation/sidebar/sidebar.component";
import {Container, Content, Divider, Header, Placeholder} from "rsuite";
import FooterComponent from "../../global/footer/footer.component";
import {Helmet} from "react-helmet";
//import ProfileComponent from "./profile/profile.component";

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