import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Data
import AuthService from './services/user/authentication/auth.service';

// CSS
import './App.css';
import 'rsuite/lib/styles/themes/dark/index.less';

// Components
import DashboardComponent from "./components/pages/dashboard/dashboard.component";
import AnalyticsComponent from "./components/pages/analytics/analtyics.component";
import UsersComponent from "./components/pages/users/users.component";
import BuildingComponent from "./components/pages/building/building.component";
import UserComponent from "./components/pages/user/user.component";
import NotfoundComponent from "./components/pages/notfound/notfound.component";
import LoginComponent from "./components/pages/login/login.component";

class App extends Component {
    constructor(props) {
        super(props);

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
            isAdmin: false
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

    render() {
        const { user } = this.state;
        if (user) {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path={["/", "/home", "/dashboard"]} component={DashboardComponent} />
                        <Route exact path={["/analytics"]} component={AnalyticsComponent} />
                        <Route exact path={["/users"]} component={UsersComponent} />
                        <Route exact path={["/building/:building"]} component={BuildingComponent} />
                        <Route exact path={["/profile", "/login"]} component={UserComponent} />
                        <Route component={NotfoundComponent} />
                    </Switch>
                </BrowserRouter>
            );
        } else {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path={["/", "/login"]} component={LoginComponent}/>
                        <Route component={NotfoundComponent} />
                    </Switch>
                </BrowserRouter>

            )
        }

    }
}

export default App;
