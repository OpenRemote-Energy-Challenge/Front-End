import React, { Component } from 'react';
import {Container, Header, Content, Footer, Sidebar, Sidenav, Icon, Nav, Dropdown, Navbar} from 'rsuite';
import { Switch, Route, Router } from "react-router-dom";

// CSS
import './App.css';
import 'rsuite/dist/styles/rsuite-dark.css'

// Components
import Navigation from './components/primary/navbar.component';

// Boards
import NotFound from './components/boards/notfound.component';
import Dashboard from './components/boards/dashboard.component';
import Analytics from './components/boards/analytics.component';
import Users from './components/boards/users.component';
import Login from './components/boards/user/login.component';
import Profile from './components/boards/user/profile.component';
import Data from './components/boards/settings/data.component';
import Permissions from './components/boards/settings/permissions.component';


// Styles
const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
};

const iconStyles = {
    width: 56,
    height: 56,
    lineHeight: '56px',
    textAlign: 'center'
};

const NavToggle = ({ expand, onChange }) => {
    return (
        <Navbar appearance="subtle" className="nav-toggle">
            <Navbar.Body>
                <Nav>
                    <Dropdown
                        placement="topStart"
                        trigger="click"
                        renderTitle={children => {
                            return <Icon style={iconStyles} icon="cog" />;
                        }}
                    >
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                </Nav>

                <Nav pullRight>
                    <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                        <Icon icon={expand ? 'angle-left' : 'angle-right'} />
                    </Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
};

class App extends Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);

        this.state = {
            expand: true
        };
    }

    handleToggle() {
        this.setState({
            expand: !this.state.expand
        });
    }

    render() {
        const { expand } = this.state;
        return (
            <div className="show-fake-browser sidebar-page">
                <Container>
                    <Sidebar
                        style={{ display: 'flex', flexDirection: 'column' }}
                        width={expand ? 260 : 56}
                        collapsible
                    >
                        <Sidenav.Header>
                            <div style={headerStyles}>
                                <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
                                <span style={{ marginLeft: 12 }}> OpenRemote</span>
                            </div>
                        </Sidenav.Header>
                        <Sidenav
                            expanded={expand}
                            defaultOpenKeys={['3']}
                            appearance="subtle"
                        >
                            <Navigation />
                        </Sidenav>
                        <NavToggle expand={expand} onChange={this.handleToggle} />
                    </Sidebar>

                    <Container>
                        <Header>
                            <h2>Page Title</h2>
                        </Header>
                        <Content>
                            <Switch>
                                <Route exact path={["/", "/home"]} component={Dashboard} />
                                <Route exact path={["/analytics"]} component={Analytics} />
                                <Route exact path={["/users"]} component={Users} />
                                <Route exact path={["/permissions"]} component={Permissions} />
                                <Route exact path={["/data"]} component={Data} />
                                <Route exact path={["/login"]} component={Login} />
                                <Route exact path={["/profile"]} component={Profile} />
                                <Route component={NotFound} />
                            </Switch>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Footer</Footer>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default App;
