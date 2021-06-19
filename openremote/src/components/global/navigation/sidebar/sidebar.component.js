import React, { Component } from "react";
import { isMobile } from 'react-device-detect';
import {Icon, Nav, Navbar, Sidebar, Sidenav} from "rsuite";
import NavigationComponent from "./navigation.component";

// Styles
const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#a3b421',
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
                <Nav pullRight>
                    <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                        <Icon icon={expand ? 'angle-left' : 'angle-right'} />
                    </Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
};

export default class SidebarComponent extends Component {
    constructor(props) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);

        this.state = {
            expand: true,
            activeKey: props.activeKey,
            openKey: props.openKey || ''
        };
    }

    componentDidMount() {
        if (isMobile) {
            this.setState({
                expand: false
            });
        }
    }

    handleToggle() {
        this.setState({
            expand: !this.state.expand
        });
    }

    render() {
        const { expand } = this.state;
        return (
            <Sidebar
                style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#1A1D24' }}
                width={expand ? 260 : 56}
                collapsible
            >
                <Sidenav.Header>
                    <div style={headerStyles}>
                        <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
                        <span style={{ marginLeft: 12 }}> Openremote</span>
                    </div>

                </Sidenav.Header>
                <Sidenav
                    expanded={expand}
                    defaultOpenKeys={[`${this.state.openKey}`]}
                    activeKey={this.state.activeKey}
                >
                    <NavigationComponent />
                </Sidenav>
                <NavToggle expand={expand} onChange={this.handleToggle} />
            </Sidebar>
        )
    }
}