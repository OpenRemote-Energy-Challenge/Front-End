import React, { Component } from "react";
import {Button, Placeholder, Header, Table} from 'rsuite';
import Library from '../../lib/arraySplit.lib';
import SolarDataService from '../../services/solar/data.service';
import Data from '../../getData.json';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import {color} from "echarts";

const { Column, HeaderCell, Cell, Pagination } = Table;

export default class AnalyticsComponent extends Component {
    constructor(props) {
        super(props);
        //this.sortData = this.sortData.bind(this);
        this.setSolarData = this.setSolarData.bind(this);
        this.getSolarData = this.getSolarData.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleLengthChange = this.handleLengthChange.bind(this);

        this.state = {
            user: null,
            isAdmin: false,
            solarData: undefined,
            solarDataFiltered: undefined,
            displayLength: 10,
            page: 1,
            loading: false
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

        this.getSolarData();
    }

    getSolarData() {
        // let data = Library.sortArrayByItem(Data);
        // this.setSolarData(data[1]);
        SolarDataService.getAll()
            .then(res => {
                let data = Library.sortArrayByItem(res.data);
                this.setSolarData(data[1]);
                console.log(data);
            })

    }
    //
    // sortData() {
    //     let data = Library.sortArrayByItem(Data);
    //     console.log(data)
    //     // SolarDataService.getAll()
    //     //     .then(res => {
    //     //         let data = Library.sortArrayByItem(res.data);
    //     //         console.log(data);
    //     //     })
    // }

    setSolarData = async data => {
        const { displayLength, page } = this.state;
        let filteredData = data.filter((v, i) => {
            const start = displayLength * (page - 1);
            const end = start + displayLength;
            return i >= start && i < end;
        });

        await this.setState({
            solarData: data,
            solarDataFiltered: filteredData
        });
    }

    handlePageChange(dataKey) {
        this.setState({
            page: dataKey
        });
        this.getSolarData();
    }

    handleLengthChange(dataKey) {
        this.setState({
            page: 1,
            displayLength: dataKey
        });
        this.getSolarData();
    }

    render() {
        const { loading, displayLength, page } = this.state;
        return (
            <div>
                {/*<Placeholder.Graph active />*/}
                {/*<Button onClick={this.sortData}>Click me</Button>*/}
                {this.state.solarData ? (
                    <div>
                        <Table height={420} data={this.state.solarDataFiltered} loading={loading}>
                            <Column width={150} align="center">
                                <HeaderCell>Timestamp</HeaderCell>
                                <Cell dataKey="timestamp" />
                            </Column>

                            <Column width={200} fixed>
                                <HeaderCell>Name</HeaderCell>
                                <Cell dataKey="name" />
                            </Column>

                            <Column width={100} fixed>
                                <HeaderCell>attribute_name</HeaderCell>
                                <Cell dataKey="attribute_name" />
                            </Column>

                            <Column width={200}>
                                <HeaderCell>value</HeaderCell>
                                <Cell dataKey="value" />
                            </Column>

                        </Table>

                        <Pagination
                            lengthMenu={[
                                {
                                    value: 10,
                                    label: 10
                                },
                                {
                                    value: 20,
                                    label: 20
                                },
                                {
                                    value: 30,
                                    label: 30
                                },
                                {
                                    value: 40,
                                    label: 40
                                },
                                {
                                    value: 50,
                                    label: 50
                                },
                                {
                                    value: 100,
                                    label: 100
                                }
                            ]}
                            activePage={page}
                            displayLength={displayLength}
                            total={this.state.solarData.length}
                            onChangePage={this.handlePageChange}
                            onChangeLength={this.handleLengthChange}
                        />
                    </div>
                ) : (
                    <div>
                        <Table height={420} data={this.state.solarDataFiltered} loading={true}>
                            <Column width={150} align="center" fixed>
                                <HeaderCell>Timestamp</HeaderCell>
                                <Cell dataKey="timestamp" />
                            </Column>

                            <Column width={200} fixed>
                                <HeaderCell>Name</HeaderCell>
                                <Cell dataKey="name" />
                            </Column>

                            <Column width={100}>
                                <HeaderCell>attribute_name</HeaderCell>
                                <Cell dataKey="attribute_name" />
                            </Column>

                            <Column width={200}>
                                <HeaderCell>value</HeaderCell>
                                <Cell dataKey="value" />
                            </Column>

                        </Table>

                        <Pagination
                            lengthMenu={[
                                {
                                    value: 10,
                                    label: 10
                                },
                                {
                                    value: 20,
                                    label: 20
                                },
                                {
                                    value: 30,
                                    label: 30
                                },
                                {
                                    value: 40,
                                    label: 40
                                },
                                {
                                    value: 50,
                                    label: 50
                                },
                                {
                                    value: 100,
                                    label: 100
                                }
                            ]}
                            activePage={page}
                            displayLength={displayLength}
                            onChangePage={this.handlePageChange}
                            onChangeLength={this.handleLengthChange}
                        />
                    </div>
                )}
            </div>
        )
    }
}