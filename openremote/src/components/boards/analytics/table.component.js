import React, { Component } from "react";
import {Alert, Container, Content, Divider, Footer, Header, Table} from "rsuite";

// Data
import SolarDataService from '../../../services/solar/data.service';
import EnergyDataService from '../../../services/energy/data.service';

// Lib
import Lib from '../../../lib/arraySplit.lib';

const { Column, HeaderCell, Cell, Pagination } = Table;

export default class TableAnalyticsComponent extends Component {
    constructor(props) {
        super(props);
        this.getSolarData = this.getSolarData.bind(this);

        this.state = {
            loading: false,
            displayLength: 10,
            solarData: []
        }
    }

    componentWillMount() {
        // Get solar data before component is mounted
        this.getSolarData();
    }

    getSolarData() {
        // Get solar data here
        SolarDataService.getAll()
            .then(res => {
                this
            })
            .catch(err => {
                const resMessage =
                    (err.response &&
                        err.response.data &&
                        err.response.data.message) ||
                    err.message ||
                    err.toString();

                Alert.error(resMessage);
            })
    }

    setSolar = async data => {

    }

}

