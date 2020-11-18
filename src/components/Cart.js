import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const Cart = () => {

  const { cart, removeFromCart, clearCart } = useCartContext();


  let cartTotal = 0;
  if (cart === null) {
    return cartTotal;
  } else {
    let eachItemTotal = 0;
    eachItemTotal = cart.map(item => item.price * item.qtyInCart);
    cartTotal = eachItemTotal.reduce((total, num) => total + num, 0);
  }

  return (
    <>
      <div className="container bg-dark">
        <div className="container d-flex flex-wrap">
          {!cart.length &&
            <>
              <h3 className="col-12 text-center">Your cart is empty</h3>
              <Link className="col-12 text-center" to="/">
                <button className="btn btn-secondary rounded shadow-none mx-auto">Browse items</button>
              </Link>
            </>}

          {cart.length && <>
            <>
              <h3 className="col-12 text-center">Your cart contents</h3>
              <ul className="col-12 list-unstyled">
                {cart.map(cartItem => (
                  <div className="col-12 bg-secondary py-2 mb-1 rounded d-flex flex-no-wrap">
                    <figure className="col-1 my-auto">
                      <img className="w-100 rounded" src={cartItem.imageURL} alt="distortion" />
                    </figure>
                    <div className="col-7 pl-2 my-auto rounded">
                      <p className="my-1">Model: {cartItem.title}</p>
                      <p className="my-1">Based on: {cartItem.realName}</p>
                    </div>
                    <div className="col-2 my-auto">
                      <p className="my-1 text-center">${cartItem.price} x {cartItem.qtyInCart}</p>
                    </div>
                    <div className="col-1 my-auto">
                      <p className="my-1 text-center">${cartItem.price * cartItem.qtyInCart}</p>
                    </div>
                    <button onClick={() => removeFromCart(cartItem.id)} className="col-1 btn btn-secondary rounded shadow-none ml-1">Remove</button>
                  </div>
                ))}
            <div className="col-12 bg-secondary py-2 mb-1 rounded d-flex justify-content-end">
              <p className="my-auto">Total: {cartTotal}</p>
            </div>
              </ul>
            </>
            <button onClick={() => clearCart([])} className="btn btn-secondary rounded shadow-none mx-auto">Clear Cart</button>
          </>}
        </div>
      </div>
    </>
  )
}

export default Cart;
