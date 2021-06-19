import React, { Component } from "react";
import MainGraph from "./dashboard/powergraph.component";
import {Button, ButtonGroup, ButtonToolbar, Notification, Icon, Drawer, Placeholder} from "rsuite";
export default class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.demoPowerSave = this.demoPowerSave.bind(this);
        this.demoCloudy = this.demoCloudy.bind(this);
        this.demoOutage = this.demoOutage.bind(this);
        this.close = this.close.bind(this);

        this.state = {
            user: null,
            isAdmin: false,
            showDrawer: false,
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

    demoPowerSave() {
        Notification['warning']({
            title: "Low Battery!",
            duration: 5000,
            description: <div>
                <p>Conserve battery <Icon icon='battery-1' /> power by turning of unused lights and devices.</p>
                <ButtonToolbar style={{marginTop: 10}}>
                    <Button
                        onClick={() => {
                            Notification.close();
                            this.setState({ showDrawer: true });
                        }}
                        appearance='ghost'
                    >
                        More Info
                    </Button>
                    <Button
                        onClick={() => {
                            Notification.close();
                        }}
                        appearance='ghost'
                        color="red"
                    >
                        Dismiss
                    </Button>
                </ButtonToolbar>
            </div>
        })
    }

    demoCloudy() {
        Notification['warning']({
            title: "Cloudy Weather!",
            duration: 5000,
            description: <div>
                <p>Weather predictions indicate cloudy <Icon icon='cloud' /> weather in the coming days. Use power sparingly <Icon icon='plug' /> </p>
                <ButtonToolbar style={{marginTop: 10}}>
                    <Button
                        onClick={() => {
                            Notification.close();
                            this.setState({ showDrawer: true });
                        }}
                        appearance='ghost'
                    >
                        More Info
                    </Button>
                    <Button
                        onClick={() => {
                            Notification.close();
                        }}
                        appearance='ghost'
                        color="red"
                    >
                        Dismiss
                    </Button>
                </ButtonToolbar>
            </div>
        })
    }

    demoOutage() {
        Notification['warning']({
            title: "Power Outage",
            duration: 5000,
            description: <div>
                <p><Icon icon='unlink' /> Power outage detected. Relying on solar and battery energy.</p>
                <ButtonToolbar style={{marginTop: 10}}>
                    <Button
                        onClick={() => {
                            Notification.close();
                            this.setState({ showDrawer: true });
                        }}
                        appearance='ghost'
                    >
                        More Info
                    </Button>
                    <Button
                        onClick={() => {
                            Notification.close();
                        }}
                        appearance='ghost'
                        color="red"
                    >
                        Dismiss
                    </Button>
                </ButtonToolbar>
            </div>
        })
    }

    close() {
        this.setState({
            showDrawer: false
        })
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
                <Drawer
                    show={this.state.showDrawer}
                    onHide={this.close}
                >
                    <Drawer.Header>
                        <Drawer.Title>More Info</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Body>
                        <Placeholder.Paragraph rows={18} graph="image" active />
                    </Drawer.Body>
                    <Drawer.Footer>
                        <Button onClick={this.close} appearance="primary">Confirm</Button>
                        <Button onClick={this.close} appearance="subtle">Cancel</Button>
                    </Drawer.Footer>
                </Drawer>
                <ButtonToolbar>
                    <ButtonGroup>
                        <Button onClick={this.demoCloudy}>Simulate Cloudy Weather</Button>
                        <Button onClick={this.demoPowerSave}>Simulate PowerSave Trigger</Button>
                        <Button onClick={this.demoOutage}>Simulate Power Outage</Button>
                    </ButtonGroup>
                </ButtonToolbar>
                <h1>Welcome back</h1>
                <h3>Today is {day} {currentDate.getDate()} {month} {currentDate.getFullYear()}</h3>
                <div>
                    <MainGraph/>
                </div>

            </div>
        )

    }

}