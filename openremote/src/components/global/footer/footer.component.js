import React, { Component } from "react";
import {Footer} from "rsuite";

export default class FooterComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Footer style={{textAlign: 'center'}}>Copyright © {new Date().getFullYear()}</Footer>
        )
    }
}