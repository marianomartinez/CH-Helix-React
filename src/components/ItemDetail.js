import React from 'react';
// Components
import ItemCount from './ItemCount';

// Media
// import icon from '../images/blocks/distortion.PNG';

const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      <div className="row bg-secondary mb-1 rounded d-flex">
        <div className="col-12 col-md-6">
          <figure className="my-auto p-1">
            <img className="w-100 rounded" src={item.imageURL} alt="distortion" />
          </figure>
        </div>
        <div className="col-12 col-md-6 pl-2 rounded d-flex flex-wrap justify-content-center">
          <h2 className="col-12 text-center">{item.title}</h2>
          <h4 className="col-12 text-center">Based on: {item.realName}</h4>
          <div className="col-12 align-self-end">
            <p className="col-12 text-center">${item.price}</p>
          </div>
          <div className="align-self-end">
            <ItemCount initial={2} min={1} stock={5} onAdd={count => alert(`Agregados al carrito: ${count}`)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;