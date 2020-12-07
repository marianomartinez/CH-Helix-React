import React from 'react';
import Item from './Item';

const ItemList = ({ items, title }) => {
    return (
        <div className="container">
            <h3 style={{ textAlign: "center" }}>{title}</h3>
            <ul className="list-unstyled">
                {items.map((item, i) => (<Item {...item} key={i} />))}
            </ul>
        </div>
    )
}

export default ItemList;