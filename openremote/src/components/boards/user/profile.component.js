import React, { Component } from "react";
import { Placeholder } from 'rsuite';

export default class ProfileComponent extends Component {
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
        const { Paragraph } = Placeholder;
        return (
            <div>
                <Paragraph style={{ marginTop: 30 }} rows={5} graph="image" active />
            </div>
        )
    }
}