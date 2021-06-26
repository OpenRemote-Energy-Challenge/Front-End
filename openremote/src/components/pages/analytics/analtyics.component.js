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
            user: {
                "userId": {
                    "timestamp": 1623527396,
                    "date": "2021-06-12T19:49:56.000+00:00"
                },
                "fullName": "admin",
                "password": "21232f297a57a5a743894a0e4a801fc3",
                "accessLevel": 3
            },
            isAdmin: false
        }
    }

    componentDidMount() {
        // Get user here
        const user = AuthService.getCurrentUser();

        // if (user) {
        //     this.setState({
        //         user: user,
        //         isAdmin: user.accessLevel === 3
        //     })
        // }
    }

    render() {
        const { user } = this.state;
        if (user) {
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
        } else {
            return <Redirect to="login" />
        }
    }
}