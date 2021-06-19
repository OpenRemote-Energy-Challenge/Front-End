import React, { Component } from "react";
import {FlexboxGrid} from "rsuite";

export default class BuildingsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buildings: undefined
        };
    }

    async componentDidMount() {
        // Get all the building names
    }

    render() {
        return (
            <div className="show-grid">
                <FlexboxGrid justify={"start"}>
                    {this.state.buildings && this.state.buildings.map((building, i) => {
                        return (
                            <BuildingsComponent key={i} building={building} />
                        )
                    })}
                </FlexboxGrid>
            </div>
        )
    }

}