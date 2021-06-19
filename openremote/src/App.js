import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

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
                username: "Someone",
                id: "12121212",
                isAdmin: true,
            },
            isAdmin: false
        }
    }

    componentDidMount() {
        // Get user here

        // Temp
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
        const { user } = this.state;
        if (user) {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path={["/", "/home", "/dashboard"]} component={DashboardComponent} />
                        <Route exact path={["/analytics"]} component={AnalyticsComponent} />
                        <Route exact path={["/users"]} component={UsersComponent} />
                        <Route exact path={["/builder/:building"]} component={BuildingComponent} />
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
