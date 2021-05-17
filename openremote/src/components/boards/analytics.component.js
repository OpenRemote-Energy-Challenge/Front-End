import React, { Component } from "react";
import {Button, Placeholder} from 'rsuite';
import Library from '../../lib/arraySplit.lib';
import SolarDataService from '../../services/solar/data.service';
import Data from '../../getData.json';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import {color} from "echarts";

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
        console.log(data);
        // SolarDataService.getAll()
        //     .then(res => {
        //         let data = Library.sortArrayByItem(res.data);
        //         console.log(data);
        //     })
    }

    render() {
        return (
            <div>
                <Placeholder.Graph active height="50px"/>
                <Table width="100%" height="300px" data={Data}>

                    <Column flexGrow={1}>
                        <HeaderCell>Timestamp</HeaderCell>
                        <Cell dataKey="timestamp" />
                    </Column>

                    <Column flexGrow={1}>
                        <HeaderCell>Date</HeaderCell>
                        <Cell dataKey="date"/>
                    </Column>

                    <Column flexGrow={1}>
                        <HeaderCell>Building</HeaderCell>
                        <Cell dataKey="name"/>
                    </Column>

                    <Column flexGrow={1}>
                        <HeaderCell>Power Generated</HeaderCell>
                        <Cell dataKey="date"/>
                    </Column>

                </Table>
                <Button onClick={this.sortData} style={{width:"10%"}}>Click me</Button>
            </div>
        )
    }
}