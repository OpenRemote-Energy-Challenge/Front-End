import React, { Component } from "react";
import TopBarComponent from "../../global/navigation/topbar/topbar.component";
import {Container, Content} from "rsuite";
import FooterComponent from "../../global/footer/footer.component";
import LoginFormComponent from "./forms/loginform.component";

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login-page">
                <Container>
                    <TopBarComponent />
                    <Content>
                        <LoginFormComponent />
                    </Content>
                    <FooterComponent />
                </Container>
            </div>
        )
    }
}