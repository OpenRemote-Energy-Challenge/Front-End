import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

// Components
import SidebarComponent from "../../global/navigation/sidebar/sidebar.component";
import {Container, Content, Divider, Header, Placeholder} from "rsuite";
import FooterComponent from "../../global/footer/footer.component";
import DataComponent from "./data/data.component";
import {Helmet} from "react-helmet";

export default class BuildingComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: undefined,
            isAdmin: false,
            building: props.match.params.building,
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
        const { user, building, loading } = this.state;
        if (user) {
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
                                    {loading ? (
                                        <Placeholder.Grid rows={5} columns={6} active />
                                    ) : (
                                        <DataComponent building={building} />
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