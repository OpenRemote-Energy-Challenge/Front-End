import React from 'react';
import {Button, Col, FlexboxGrid} from "rsuite";

export default class BuildingComponent extends React.PureComponent {
    render() {
        const { building, key, ...props } = this.props;
        return (
            <FlexboxGrid.Item key={key} componentClass={Col} colspan={24} md={6} className="building-item" {...props}>
                <h4>{building}</h4>
                <Button appearance="primary" href={`/building/${building}`}>View</Button>
            </FlexboxGrid.Item>
        );
    }
}