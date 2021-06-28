import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

// Components
import SidebarComponent from "../../global/navigation/sidebar/sidebar.component";
import {Container, Content, Divider, Header} from "rsuite";
import FooterComponent from "../../global/footer/footer.component";
import BuildingsComponent from "./blocks/buildings.component";
import {Helmet} from "react-helmet";
import AuthService from "../../../services/user/authentication/auth.service";

export default class AnalyticsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: undefined,
            isAdmin: false
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
        return (
            <>
                <Helmet>
                    <title>OpenRemote | Analytics</title>
                </Helmet>
                <Container>
                    <SidebarComponent activeKey="2" />

                    <Container className="container-content">
                        <Header>
                            <h2>Analytics</h2>
                        </Header>
                        <Divider />
                        <Content>
                            <div className="content-inner">
                                <BuildingsComponent />
                            </div>
                        </Content>
                        <FooterComponent />
                    </Container>
                </Container>
            </>
        )
    }
}