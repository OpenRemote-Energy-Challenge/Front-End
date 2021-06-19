import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

// Components
import SidebarComponent from "../../global/navigation/sidebar/sidebar.component";
import {Button, Container, Content, Divider, Header, Loader, Placeholder} from "rsuite";
import FooterComponent from "../../global/footer/footer.component";

export default class DashboardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: "Someone",
                id: "12121212",
                isAdmin: true,
            },
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
                <Container>
                    <SidebarComponent activeKey="1" />

                    <Container className="container-content">
                        <Header>
                            <h2>Dashboard</h2>
                        </Header>
                        <Divider />
                        <Content>
                            <div className="content-inner">
                                {loading ? (
                                    <Placeholder.Paragraph rows={18} active>
                                        <Loader backdrop content="loading..." vertical />
                                    </Placeholder.Paragraph>
                                ) : (
                                    <div>
                                        <p>Replace me with content</p>
                                        <Button appearance='primary'>Something</Button>
                                        {/* Add dashboard content component here */}
                                    </div>
                                )}
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