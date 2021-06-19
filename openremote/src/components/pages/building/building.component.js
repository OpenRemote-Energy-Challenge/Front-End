import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

// Components
import SidebarComponent from "../../global/navigation/sidebar/sidebar.component";
import {Container, Content, Divider, Header} from "rsuite";
import FooterComponent from "../../global/footer/footer.component";
import DataComponent from "./data/data.component";

export default class BuildingComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: undefined,
            isAdmin: false,
            building: props.match.params.building
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
        const { user, building } = this.state;
        if (user) {
            return (
                <Container>
                    <SidebarComponent />

                    <Container className="container-content">
                        <Header>
                            <h2>Building - {building}</h2>
                        </Header>
                        <Divider />
                        <Content>
                            <div className="content-inner">
                                <DataComponent building={building} />
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