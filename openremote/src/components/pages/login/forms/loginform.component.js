import React, { Component } from "react";
import {Button, ButtonToolbar, Col, FlexboxGrid, Form, FormGroup, Loader, Panel, Schema} from "rsuite";

// Components
import TextFieldComponent from "./textField.component";

// Schema
const { StringType } = Schema.Types;
const model = Schema.Model({
    username: StringType().isRequired('This field is required.'),
    password: StringType().isRequired('This field is required.')
});

export default class LoginFormComponent extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            checkTrigger: 'change',
            formValue: {},
            formError: {},
            loading: false
        };
    }

    handleSubmit() {
        const { formValue } = this.state;
        if (!this.form.check()) {
            Notification['error']({
                title: "Invalid Inputs",
                description: <p>Please provide both a username and password.</p>
            });
            return;
        }

        if (this.form.check()) {
            this.setState({
                loading: true
            });

            // Authenticate user here
        }
    }

    render() {
        const { formValue } = this.state;
        return (
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item componentClass={Col} colspan={24} sm={18} md={12} lg={8}>
                    <Panel header={<h3>Login</h3>} bordered>
                        <Form
                            fluid
                            ref={ref => (this.form = ref)}
                            onChange={formValue => {
                                this.setState({ formValue });
                            }}
                            onCheck={formError => {
                                this.setState({ formError });
                            }}
                            formValue={formValue}
                            model={model}
                        >
                            <TextFieldComponent name="username" placeholder="Username" />
                            <TextFieldComponent name="password" placeholder="Password" type="password" />
                            <FormGroup>
                                <ButtonToolbar>
                                    <Button appearance="primary" onClick={this.handleSubmit} disabled={this.state.loading}>
                                        {this.state.loading ? (
                                            <Loader content="Logging in..." />
                                        ) : (
                                            <span>Log in</span>
                                        )}
                                    </Button>
                                </ButtonToolbar>
                            </FormGroup>
                        </Form>
                    </Panel>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        )
    }
}