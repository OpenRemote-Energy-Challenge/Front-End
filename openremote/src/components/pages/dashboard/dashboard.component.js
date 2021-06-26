import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

// Components
import SidebarComponent from "../../global/navigation/sidebar/sidebar.component";
import {Container, Content, Divider, Header, Loader, Placeholder} from "rsuite";
import FooterComponent from "../../global/footer/footer.component";
import WeatherComponent from "./weather/weather.component";
import AuthService from "../../../services/user/authentication/auth.service";

export default class DashboardComponent extends Component {
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
            isAdmin: false,
            loading: true
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
        const { user, loading } = this.state;
        if (user) {
            return (
                <Container>
                    <SidebarComponent activeKey="1" />

                    <Container className="container-content">
                        <Header>
                            <h2>Dashboard</h2>
                        </Header>
                        <Divider />
                        <Content>
                            <div className="content-inner">
                                <div>
                                    <WeatherComponent />
                                </div>
                            </div>
                        </Content>
                        <FooterComponent />
                    </Container>
                </Container>
            )
        } else {
            return <Redirect to="/login" />
        }
    }
}