import React, { Component } from "react";

// Data
import buildingSolar from '../../../../data/solar.json';
import buildingEnergy from '../../../../data/energy.json';

// Library
import Lib from '../../../../lib/extractData';
import SolarDataTableComponent from "./display/solarDataTable.component";
import {Col, Divider, Row} from "rsuite";
import EnergyDataTableComponent from "./display/energyDataTable.component";
import SolarGeneratedGraphComponent from "./display/solarGeneratedGraph.component";
import EnergyGeneratedGraphComponent from "./display/energyGeneratedGraph.component";

export default class DataComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buildingName: props.building,
            buildingDataSolar: undefined,
            buildingDataEnergy: undefined
        }
    }

    componentDidMount() {
        // Get building data here
        this.setState({
            buildingDataSolar: Lib.getSpecificBuilding(buildingSolar, this.state.buildingName),
            buildingDataEnergy: buildingEnergy
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col md={12}>
                        <h4>Summary Solar Data</h4>
                        <Divider />
                        <SolarGeneratedGraphComponent building={this.state.buildingName} />
                    </Col>
                    <Col md={12}>
                        <h4>Summary Energy Data</h4>
                        <Divider />
                        <EnergyGeneratedGraphComponent building={this.state.buildingName} />
                    </Col>
                </Row>
                <Divider><strong>Data Tables</strong></Divider>
                <Row style={{marginTop: '15px'}}>
                    <Col md={12}>
                        <h4>Solar Data</h4>
                        <Divider />
                        {this.state.buildingDataSolar ? (
                            <SolarDataTableComponent buildingData={this.state.buildingDataSolar} />
                        ) : null}
                    </Col>
                    <Col md={12}>
                        <h4>Energy Data</h4>
                        <Divider />
                        {this.state.buildingDataEnergy ? (
                            <EnergyDataTableComponent buildingData={this.state.buildingDataEnergy} />
                        ) : null}
                    </Col>
                </Row>

            </div>
        )
    }

}