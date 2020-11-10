import React from 'react';

// Router
import { Link } from 'react-router-dom';

// Components
import ItemCount from './ItemCount';

// Media
// import icon from '../images/blocks/distortion.PNG';

const Item = (props) => {
    return (
        <div className="container">
            <Link to={`/item/${props.id}`} className="text-decoration-none">
                <div className="row bg-secondary mb-1 rounded d-flex">
                    <figure className="col-1  my-auto">
                        <img className="w-100 rounded" src={props.imageURL} alt="distortion" />
                    </figure>
                    <div className="col-8 pl-2 my-auto rounded">
                        <p className="my-1">Model: {props.title}</p>
                        <p className="my-1">Based on: {props.realName}</p>
                    </div>
                    <div className="col-1 my-auto d-flex">
                        <p className="my-1 text-center">${props.price}</p>
                    </div>
                    <ItemCount style={"col-2"} initial={2} min={1} stock={5} onAdd={count => alert(`Agregados al carrito: ${count}`)} />
                </div>
            </Link>
        </div>
    )
}

export default Item;