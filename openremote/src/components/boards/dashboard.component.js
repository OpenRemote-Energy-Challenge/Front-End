import React, { Component } from "react";
import MainGraph from "./dashboard/powergraph.component";

// Components
import PrimaryGraph from './dashboard/primarygraph.component';

export default class DashboardComponent extends Component {
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
        let currentDate = new Date();
        let month = null;
        let day = currentDate.getDay();
        switch(currentDate.getMonth())
        {
            case 0: month = "January";
                break;
            case 1: month = "February";
                break;
            case 2: month = "March";
                break;
            case 3: month = "April"
                break;
            case 4: month = "May";
                break;
            case 5: month = "June";
                break;
            case 6: month = "July";
                break;
            case 7: month = "August";
                break;
            case 8: month = "September";
                break;
            case 9: month = "October";
                break;
            case 10: month = "November";
                break;
            case 11: month = "December";
                break;
        }
        switch(currentDate.getDay())
        {
            case 0: day = "Sunday";
                break;
            case 1: day = "Monday";
               break;
            case 2: day = "Tuesday";
                break;
            case 3: day = "Wednesday";
                break;
            case 4: day = "Thursday";
                break;
            case 5: day = "Friday";
                break;
            case 6: day = "Saturday";
                break;
        }

        return (
            <div>
                <h1>Welcome back</h1>
                <h3>Today is {day} {currentDate.getDate()} {month} {currentDate.getFullYear()}</h3>
                <div>
                    <MainGraph/>
                </div>
            </div>
        )

    }

}