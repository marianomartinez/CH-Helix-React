import React from 'react';
// Components
import ItemCount from './ItemCount';
//Bootstrap
import { Media, Row } from 'react-bootstrap';
// Media
import icon from '../images/blocks/distortion.PNG';

const ListItem = (props) => {
        return (
            <Row className="bg-secondary mb-1 rounded d-flex justify-content-between">
                <Media>
                    <img className="h-100 mr-1 rounded-left" src={icon} alt="distortion" />
                    <div className="pl-2 my-auto rounded">
                        <p className="my-1">Model: {props.hxName}</p>
                        <p className="my-1">Based on: {props.realName}</p>
                    </div>
                </Media>
                <ItemCount />
            </Row>
        )
}

export default ListItem;