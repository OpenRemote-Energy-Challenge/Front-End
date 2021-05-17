import React, { Component } from "react";
import {Button, Placeholder} from 'rsuite';
import Library from '../../lib/arraySplit.lib';
import SolarDataService from '../../services/solar/data.service';
import Data from '../../getData.json';

export default class AnalyticsComponent extends Component {
    constructor(props) {
        super(props);
        this.sortData = this.sortData.bind(this);

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

    sortData() {
        let data = Library.sortArrayByItem(Data);
        console.log(data)
        // SolarDataService.getAll()
        //     .then(res => {
        //         let data = Library.sortArrayByItem(res.data);
        //         console.log(data);
        //     })
    }

    render() {
        return (
            <div>
                <Placeholder.Graph active />
                <Button onClick={this.sortData}>Click me</Button>
            </div>
        )
    }
}