import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

// Components
import SidebarComponent from "../../global/navigation/sidebar/sidebar.component";
import {Container, Content, Divider, Header, Placeholder} from "rsuite";
import FooterComponent from "../../global/footer/footer.component";
import DataComponent from "./data/data.component";
import {Helmet} from "react-helmet";
import AuthService from "../../../services/user/authentication/auth.service";

export default class BuildingComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: undefined,
            isAdmin: false,
            building: props.match.params.building,
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
        const { building } = this.state;
        return (
            <>
                <Helmet>
                    <title>OpenRemote | {building}</title>
                </Helmet>
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
            </>

        )
    }
}