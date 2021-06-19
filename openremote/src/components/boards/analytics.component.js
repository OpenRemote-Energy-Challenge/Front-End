import React, { Component } from "react";

// Components
import TestComponent from "./analytics/buildings/test.component";
import TamarComponent from "./analytics/buildings/tamar.component";
import HumberComponent from "./analytics/buildings/humber.component";
import {Col, Divider, Grid, Row} from "rsuite";

export default class AnalyticsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            isAdmin: false
        };
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
        return (
            <div>
                <div>
                    <h3>Test Building </h3>
                    <Divider />
                    <Row>
                        <Col md={12}>
                            <TestComponent />
                        </Col>
                        <Col md={12}>
                            <TestComponent />
                        </Col>
                    </Row>
                </div>
                <div style={{marginTop: 20}}>
                    <h3>Tamar Building </h3>
                    <Divider />
                    <Row>
                        <Col md={12}>
                            <TamarComponent />
                        </Col>
                        <Col md={12}>
                            <TamarComponent />
                        </Col>
                    </Row>
                </div>
                <div style={{marginTop: 20}}>
                    <h3>Humber Building </h3>
                    <Divider />
                    <Row>
                        <Col md={12}>
                            <HumberComponent />
                        </Col>
                        <Col md={12}>
                            <HumberComponent />
                        </Col>
                    </Row>
                </div>

            </div>
        )
    }
}