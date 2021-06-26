import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

// Components
import SidebarComponent from "../../global/navigation/sidebar/sidebar.component";
import {Button, ButtonToolbar, Container, Content, Divider, Drawer, Header, Icon, Notification, Placeholder} from "rsuite";
import FooterComponent from "../../global/footer/footer.component";
import WeatherComponent from "./weather/weather.component";
import AuthService from "../../../services/user/authentication/auth.service";

export default class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.demoPowerSave = this.demoPowerSave.bind(this);
        this.demoCloudy = this.demoCloudy.bind(this);
        this.demoOutage = this.demoOutage.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);

        this.state = {
            user: {
                "userId": {
                    "timestamp": 1623527396,
                    "date": "2021-06-12T19:49:56.000+00:00"
                },
                "fullName": "admin",
                "password": "21232f297a57a5a743894a0e4a801fc3",
                "accessLevel": 3
            },
            isAdmin: false,
            loading: true,
            showDrawer: false,
            drawerEvent: 'Nothing'
        }
    }

    componentDidMount() {
        // Get user here
        const user = AuthService.getCurrentUser();

        // if (user) {
        //     this.setState({
        //         user: user,
        //         isAdmin: user.accessLevel === 3
        //     })
        // }
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
                            this.setState({
                                drawerEvent: 'cloudy'
                            })
                            this.open();
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
                            this.setState({
                                drawerEvent: 'battery'
                            })
                            this.open();
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
            title: "Low Power",
            duration: 5000,
            description: <div>
                <p><Icon icon='unlink' /> Predictions indicate that you will run out of power in the next 3 hours.</p>
                <ButtonToolbar style={{marginTop: 10}}>
                    <Button
                        onClick={() => {
                            Notification.close();
                            this.setState({
                                drawerEvent: 'power'
                            })
                            this.open();
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

    open() {
        this.setState({
            showDrawer: true
        })
    }

    render() {
        const { user, showDrawer, drawerEvent } = this.state;
        if (user) {
            return (
                <Container>
                    <Drawer
                        show={showDrawer}
                        onHide={this.close}
                    >
                        <Drawer.Header>
                            {drawerEvent === 'power' ? (
                                <Drawer.Title>Low Power</Drawer.Title>
                            ) : drawerEvent === 'battery' ? (
                                <Drawer.Title>Low Battery</Drawer.Title>
                                ) : drawerEvent === 'cloudy' ? (
                                <Drawer.Title>Cloudy Weather</Drawer.Title>
                            ) : (
                                <Drawer.Title>More Info</Drawer.Title>
                            )}
                        </Drawer.Header>
                        <Drawer.Body>
                            {drawerEvent === 'power' ? (
                                <div>
                                    <h3>Save Power <Icon icon='plug' /></h3>
                                    <h4>Things that can be done to reduce power usage:</h4>
                                    <ul>
                                        <li>Turn off unnecessary lights</li>
                                        <li>Take shorter showers</li>
                                        <li>Unplug unused electronics</li>
                                        <li>Replace old globes with LEDs</li>
                                        <li>Wash laundry in cold</li>
                                    </ul>
                                    <h4>Items that use a lot of power:</h4>
                                    <ul>
                                        <li>Computer</li>
                                        <li>Washer & Dryer</li>
                                        <li>Water Heater</li>
                                        <li>Cooling items (aircons)</li>
                                        <li>Electric Ovens</li>
                                        <li>Microwaves and other heating items</li>
                                    </ul>
                                    <div style={{marginTop: '25px'}}>
                                        <Button href="/analytics" appearance="primary">View Analytics</Button>
                                    </div>
                                </div>
                            ) : drawerEvent === 'battery' ? (
                                <div>
                                    <h3>Low Battery Power <Icon icon='battery-1' /></h3>
                                    <h4>Potential Causes: </h4>
                                    <ul>
                                        <li>Cloudy Weather</li>
                                        <li>High Energy Usage</li>
                                        <li>Faulty Solar Panels</li>
                                        <li>Faulty Battery Modules</li>
                                    </ul>
                                    <h4>Things that can improve battery power:</h4>
                                    <ul>
                                        <li>Charge from the grid</li>
                                        <li>Clean Solar Panels</li>
                                        <li>Replace Faulty Batteries</li>
                                        <li>Reduce Power usage</li>
                                        <li>Set charge and discharge limits</li>
                                    </ul>
                                    <div style={{marginTop: '25px'}}>
                                        <Button href="/analytics" appearance="primary">View Analytics</Button>
                                    </div>
                                </div>
                            ) : drawerEvent === 'cloudy' ? (
                                <div>
                                    <h3>Cloudy / Rainy Weather <Icon icon='cloud' /></h3>
                                    <h4>Effects of cloudy weather on solar: </h4>
                                    <ul>
                                        <li>UV is reduced causing less energy to be produced</li>
                                        <li>Grid reliance increases</li>
                                        <li>Batteries charge slower</li>
                                        <li>Energy generation is reduced</li>
                                    </ul>
                                    <div style={{marginTop: '25px'}}>
                                        <Button href="/analytics" appearance="primary">View Analytics</Button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <p>Use power more sparingly to reserve battery energy and improve longevity</p>
                                </div>
                            )}
                        </Drawer.Body>
                        <Drawer.Footer>
                            <div style={{marginBottom: '30px'}}>
                                <Button onClick={this.close} appearance="primary">Confirm</Button>
                                <Button onClick={this.close} appearance="subtle">Cancel</Button>
                            </div>
                        </Drawer.Footer>
                    </Drawer>
                    <SidebarComponent activeKey="1" />

                    <Container className="container-content">
                        <Header>
                            <h2>Dashboard</h2>
                        </Header>
                        <Divider />
                        <Content>
                            <div className="content-inner">
                                <div>
                                    <WeatherComponent />
                                    <ButtonToolbar>
                                        <Button onClick={this.demoPowerSave}>Low Battery Warning Simulate</Button>
                                        <Button onClick={this.demoOutage}>Lower Power Warning Simulate</Button>
                                        <Button onClick={this.demoCloudy}>Cloudy Weather Warning Simulate</Button>
                                    </ButtonToolbar>
                                </div>
                            </div>
                        </Content>
                        <FooterComponent />
                    </Container>
                </Container>
            )
        } else {
            return <Redirect to="/login" />
        }
    }
}