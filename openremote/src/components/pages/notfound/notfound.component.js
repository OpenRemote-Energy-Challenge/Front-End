import React, { Component } from "react";
//import SidebarComponent from "../../global/navigation/sidebar/sidebar.component";
import {Button, ButtonToolbar, Col, Container, Content, Divider, FlexboxGrid, Header} from "rsuite";
import FooterComponent from "../../global/footer/footer.component";
import TopBarComponent from "../../global/navigation/topbar/topbar.component";

export default class NotfoundComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: undefined
        }
    }

    componentDidMount() {
        // Get current user

        // Temp
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
                    {/*<SidebarComponent />*/}

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
            )
        } else {
            return (
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
            )
        }
    }

}