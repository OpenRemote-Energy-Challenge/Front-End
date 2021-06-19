import React, { Component } from 'react';
import {FormControl, FormGroup, HelpBlock} from "rsuite";

export default class TextFieldComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            props: props
        }
    }

    render() {
        const { name, label, accepter, ...props } = this.state
        return (
            <FormGroup>
                <FormControl name={name} accepter={accepter} {...props} />
                <HelpBlock>Required</HelpBlock>
            </FormGroup>
        );
    }

}