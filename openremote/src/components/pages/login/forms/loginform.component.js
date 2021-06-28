import React, { Component } from "react";
import {
    Button,
    ButtonToolbar,
    Col,
    FlexboxGrid,
    Form,
    FormGroup,
    Loader,
    Panel,
    Schema,
    Alert,
    Notification,
    FormControl, HelpBlock
} from "rsuite";
import AuthService from '../../../../services/user/authentication/auth.service';
import md5 from 'md5';
import {Redirect} from "react-router-dom";

// Schema
const { StringType } = Schema.Types;
const model = Schema.Model({
    username: StringType().isRequired('This field is required.'),
    password: StringType().isRequired('This field is required.')
});

class TextField extends React.PureComponent {
    render() {
        const { name, label, accepter, ...props } = this.props;
        return (
            <FormGroup>
                {/*<ControlLabel>{label} </ControlLabel>*/}
                <FormControl name={name} accepter={accepter} {...props} />
                <HelpBlock>Required</HelpBlock>
            </FormGroup>
        );
    }
}

export default class LoginFormComponent extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            checkTrigger: 'change',
            formValue: {},
            formError: {},
            loading: false,
            authenticated: false
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

            AuthService.login(formValue.username, md5(formValue.password))
                .then(() => {
                    console.log('Authenticated!');
                    window.location.reload();
                    this.setState({
                        authenticated: true
                    });
                },
                    error => {
                        const resMessage =
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                            error.message ||
                            error.toString();

                        this.setState({
                            loading: false
                        });
                        Alert.error(resMessage);
                    });
        }
    }

    render() {
        const { formValue, authenticated } = this.state;
        if (authenticated) {
            return <Redirect to="/" />
        } else {
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
                                <TextField name="username" placeholder="Username" />
                                <TextField name="password" placeholder="Password" type="password" />
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
}