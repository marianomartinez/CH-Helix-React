import React, { useState /*, useEffect */ } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const [qtyToCart, setQtyToCart] = useState();
  const [checkoutBtnState, setCheckoutBtnState] = useState(false);

  console.log(`ItemDetail.JS (ANDA) item is: ${item.title}`);

  function onAddToCart(count) {
    setQtyToCart(count);
    setCheckoutBtnState(true);
  }

  const { addToCart } = useCartContext();

  return (
    <div className="container">
      <div className="row bg-secondary mb-1 rounded d-flex">
        <div className="col-12 col-md-6">
          <figure className="my-auto p-1">
            <img className="w-100 rounded" src={item.imageURL} alt={item.title} />
          </figure>
        </div>
        <div className="col-12 col-md-6 pl-2 rounded d-flex flex-wrap justify-content-center">
          <h2 className="col-12 text-center">{item.title}</h2>
          <h4 className="col-12 text-center">Based on: {item.realName}</h4>
          <div className="col-12 align-self-end">
            <p className="col-12 text-center">${item.price}</p>
          </div>
          <div className="align-self-end">
            {/* <ItemCount initial={2} min={1} stock={5} onAdd={count => alert(`Agregados al carrito: ${count}`)} /> */}
            {!checkoutBtnState &&
              <ItemCount initial={2} min={1} stock={5} onAddClick={onAddToCart} />}
            {checkoutBtnState &&
              <Link to="/cart">
                <div className="py-2">
                  <div className="w-100 text-center">
                    <button onClick={() => addToCart(item, qtyToCart)} className="btn btn-secondary rounded shadow-none">Confirm to cart</button>
                  </div></div>
              </Link>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;