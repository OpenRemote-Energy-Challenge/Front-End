import React, { Component } from "react";
import {FlexboxGrid} from "rsuite";

// Data
import buildingData from '../../../../data/solar.json';

// Styles
import '../../../../styles/components/buildings/buildings.component.css'

// Library
import Lib from '../../../../lib/extractData';
import BuildingComponent from "./data/building.component";

export default class BuildingsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buildings: undefined
        };
    }

    async componentDidMount() {
        // Get building data from API

        // Get all the building names
        this.setState({
            buildings: Lib.extractBuildings(buildingData)
        });
    }

    render() {
        return (
            <div className="show-grid">
                <FlexboxGrid justify={"start"}>
                    {this.state.buildings && this.state.buildings.map((building, i) => {
                        return (
                            <BuildingComponent key={i} building={building.name} />
                        )
                    })}
                </FlexboxGrid>
            </div>
        )
    }

}