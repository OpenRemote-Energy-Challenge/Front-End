import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

// Components
import SidebarComponent from "../../global/navigation/sidebar/sidebar.component";
import {Container, Content, Divider, Header} from "rsuite";
import FooterComponent from "../../global/footer/footer.component";
import BuildingsComponent from "./blocks/buildings.component";

export default class AnalyticsComponent extends Component {
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
        const { user } = this.state;
        if (user) {
            return (
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
            )
        } else {
            return <Redirect to="login" />
        }
    }
}