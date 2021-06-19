import React, { Component } from "react";
import {Table} from "rsuite";
import {Cell, Column, HeaderCell} from "rsuite-table";

export default class EnergyDataTableComponent extends Component {
    constructor(props) {
        super(props);
        this.filterData = this.filterData.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleLengthChange = this.handleLengthChange.bind(this);

        this.state = {
            displayLength: 20,
            page: 1,
            loading: false,
            filteredData: undefined,
            Data: props.buildingData
        };
    }

    async componentDidMount() {
        await this.filterData(this.state.Data);
    }

    filterData = async data => {
        const { displayLength, page } = this.state;
        let filteredData = data.filter((v, i) => {
            const start = displayLength * (page - 1);
            const end = start + displayLength;
            return i >= start && i < end;
        });

        await this.setState({
            filteredData: filteredData
        });
    }

    handlePageChange = async dataKey => {
        this.setState({
            loading: true,
            page: dataKey
        });
        await this.filterData(this.state.Data);
        this.setState({
            loading: false
        });
    }

    handleLengthChange = async dataKey => {
        this.setState({
            loading: true,
            page: 1,
            displayLength: dataKey
        });
        await this.filterData(this.state.Data);
        this.setState({
            loading: false
        });
    }

    render() {
        const { loading } = this.state;
        if (this.state.Data && this.state.filteredData) {
            return (
                <div>
                    <Table height={420} data={this.state.filteredData} loading={loading}>
                        <Column width={100} align="center">
                            <HeaderCell>Timestamp</HeaderCell>
                            <Cell dataKey="timestamp" />
                        </Column>
                        <Column width={100} align="center">
                            <HeaderCell>Name</HeaderCell>
                            <Cell dataKey="name" />
                        </Column>
                        <Column width={100} align="center">
                            <HeaderCell>Uv</HeaderCell>
                            <Cell dataKey="uv" />
                        </Column>
                        <Column width={100} align="center">
                            <HeaderCell>Year</HeaderCell>
                            <Cell dataKey="timestamp_year" />
                        </Column>
                        <Column width={100} align="center">
                            <HeaderCell>Month</HeaderCell>
                            <Cell dataKey="timestamp_month" />
                        </Column>
                        <Column width={100} align="center">
                            <HeaderCell>Week</HeaderCell>
                            <Cell dataKey="timestamp_week" />
                        </Column>
                        <Column width={100} align="center">
                            <HeaderCell>Day</HeaderCell>
                            <Cell dataKey="timestamp_day" />
                        </Column>
                        <Column width={100} align="center">
                            <HeaderCell>Hour</HeaderCell>
                            <Cell dataKey="timestamp_hour" />
                        </Column>
                        <Column width={100} align="center">
                            <HeaderCell>Minute</HeaderCell>
                            <Cell dataKey="timestamp_minute" />
                        </Column>
                        <Column width={100} align="center">
                            <HeaderCell>Day of Week</HeaderCell>
                            <Cell dataKey="timestamp_dayofweek" />
                        </Column>
                    </Table>
                    <Table.Pagination
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
                        activePage={this.state.page}
                        displayLength={this.state.displayLength}
                        total={this.state.Data.length}
                        onChangePage={this.handlePageChange}
                        onChangeLength={this.handleLengthChange}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <Table height={420} data={this.state.filteredData} loading={loading}>
                        <Column width={100} align="center">
                            <HeaderCell>Timestamp</HeaderCell>
                            <Cell dataKey="timestamp" />
                        </Column>
                        <Column width={100} align="center">
                            <HeaderCell>Name</HeaderCell>
                            <Cell dataKey="name" />
                        </Column>
                        <Column width={100} align="center">
                            <HeaderCell>Uv</HeaderCell>
                            <Cell dataKey="uv" />
                        </Column>
                        <Column width={100} align="center">
                            <HeaderCell>Year</HeaderCell>
                            <Cell dataKey="timestamp_year" />
                        </Column>
                        <Column width={100} align="center">
                            <HeaderCell>Month</HeaderCell>
                            <Cell dataKey="timestamp_month" />
                        </Column>
                        <Column width={100} align="center">
                            <HeaderCell>Week</HeaderCell>
                            <Cell dataKey="timestamp_week" />
                        </Column>
                        <Column width={100} align="center">
                            <HeaderCell>Day</HeaderCell>
                            <Cell dataKey="timestamp_day" />
                        </Column>
                        <Column width={100} align="center">
                            <HeaderCell>Hour</HeaderCell>
                            <Cell dataKey="timestamp_hour" />
                        </Column>
                        <Column width={100} align="center">
                            <HeaderCell>Minute</HeaderCell>
                            <Cell dataKey="timestamp_minute" />
                        </Column>
                        <Column width={100} align="center">
                            <HeaderCell>Day of Week</HeaderCell>
                            <Cell dataKey="timestamp_dayofweek" />
                        </Column>
                    </Table>
                    <Table.Pagination
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
                        activePage={this.state.page}
                        displayLength={this.state.displayLength}
                        total={this.state.Data.length}
                        onChangePage={this.handlePageChange}
                        onChangeLength={this.handleLengthChange}
                    />
                </div>
            )
        }
    }
}