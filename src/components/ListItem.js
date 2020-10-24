import React from 'react';
// Components
import ItemCount from './ItemCount';
//Bootstrap
import { Media, Row } from 'react-bootstrap';
// Media
import icon from '../images/blocks/distortion.PNG';

const ListItem = (props) => {
        return (
            <Row style={{ border: "1px solid black" }}>
                <Media>
                    <img style={{ paddingRight: "10px" }} src={icon} alt="distortion" />
                    <Media.Body>
                        <p>Model: {props.hxName}</p>
                        <p>Based on: {props.realName}</p>
                    </Media.Body>
                </Media>
                <ItemCount />
            </Row>
        )
}

export default ListItem;