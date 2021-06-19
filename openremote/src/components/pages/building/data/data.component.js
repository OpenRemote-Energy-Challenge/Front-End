import React, { Component } from "react";

export default class DataComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buildingName: props.building,
            buildingData: undefined
        }
    }

    componentDidMount() {
        // Get building data here
    }

    render() {
        return (
            <div>
                <p>Some data here</p>
                {/* Return all the components that display analytics/data about the building here */}
            </div>
        )
    }

}