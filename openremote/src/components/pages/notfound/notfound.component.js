import React, { Component } from "react";
//import SidebarComponent from "../../global/navigation/sidebar/sidebar.component";
import {Button, ButtonToolbar, Col, Container, Content, Divider, FlexboxGrid, Header} from "rsuite";
import FooterComponent from "../../global/footer/footer.component";
import TopBarComponent from "../../global/navigation/topbar/topbar.component";
import {Helmet} from "react-helmet";
import SidebarComponent from "../../global/navigation/sidebar/sidebar.component";
import AuthService from "../../../services/user/authentication/auth.service";

export default class NotfoundComponent extends Component {
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
        const { user } = this.state;
        if (user) {
            return (
                <>
                    <Helmet>
                        <title>OpenRemote | 404 Page not found</title>
                    </Helmet>
                    <Container>
                        <SidebarComponent />

                        <Container className="container-content">
                            <Header>
                                <h2>Not Found - 404</h2>
                            </Header>
                            <Divider />
                            <Content>
                                <div className="content-inner">
                                    <h4>Could not find the specified page!</h4>
                                </div>
                            </Content>
                            <FooterComponent />
                        </Container>
                    </Container>
                </>

            )
        } else {
            return (
                <>
                    <Helmet>
                        <title>OpenRemote | 404 Page not found</title>
                    </Helmet>
                    <Container>
                        <TopBarComponent />
                        <Content>
                            <FlexboxGrid justify="center">
                                <FlexboxGrid.Item componentClass={Col} colspan={24} sm={18} md={12} lg={8} order={1} style={{textAlign: "center"}} className="not-found-content">
                                    <div>
                                        <h1>404</h1>
                                        <h4>Page not Found</h4>
                                        <ButtonToolbar>
                                            <Button appearance="primary" href="login">Login</Button>
                                        </ButtonToolbar>
                                    </div>
                                </FlexboxGrid.Item>
                            </FlexboxGrid>
                        </Content>
                        <FooterComponent />
                    </Container>
                </>
            )
        }
    }

}