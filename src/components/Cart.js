import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from '../firebase';

const Cart = () => {

  // Calculate total $ of cart contents 
  let { history } = useHistory();
  const { cart, removeFromCart, clearCart } = useCartContext();
  let cartTotal = 0;
  if (cart === null) {
    return cartTotal;
  } else {
    let eachItemTotal = 0;
    eachItemTotal = cart.map(item => item.price * item.qtyInCart);
    cartTotal = eachItemTotal.reduce((total, num) => total + num, 0);
  }



  // Reemplazo temporario de formulario de compra
  async function createOrder() { // asignarlo a un botón de Checkout
    const newOrder = {
      buyer: { name: 'Mariano', phone: '+541165456545', email: 'asd@asd' },
      items: cart,
      // items: [
      //   { id: '1', title: 'zapas', price: 200, quantity: 2 },
      //   { id: '2', title: 'gorro', price: 100, quantity: 1 },
      // ], // reemplazar por cart.map(i => ({})); etc...
      date: firebase.firestore.FieldValue.serverTimestamp(), // tenemos que usar la hora del servidor de Firebase
      total: cartTotal,
    };
    console.log('newOrder: ', newOrder);

    // --------------

    // Defines functions to Add order to "orders" collection
    const db = getFirestore();
    const orders = db.collection("orders"); // Esto buscará o creará una collection en firebase

    
    try {
      // Exectutes Add order to "orders"
      const doc = await orders.add(newOrder);
      const orderId = doc.id;
      alert(`Order created with id: ${orderId}`);
      // Executes Update items' stock
      // Defines functions to Update each sold item's stock
      const itemsToUpdate = db.collection("items").where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(i => i.id));
      const query = await itemsToUpdate.get();
      const batch = db.batch();
      const notEnoughStock = [];
      query.docs.forEach((docSnapshot, idx) => {
        if (docSnapshot.data().stock >= cart[idx].qtyInCart) {
          batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - cart[idx].qtyInCart });
        } else {
          notEnoughStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
        }
      })
      if (notEnoughStock.length === 0) {
        await batch.commit();
      }
      clearCart([]);
      // history.push("/");
    } catch (err) {
      console.log('!!!Error creating order: ', err);
    }

    // Otra forma de ejecutar la promesa:
    // orders.add(newOrder).then(id => {
    //   console.log('Order created with id: ', id);
    // });

    // --------------



    // const itemsQueryByManyId = await db.collection("items").get();
    // itemsQueryByManyId.where(firebase.firestore.FieldPath.documentId(), 'in', ['acá van los id']).get();

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
          {/* <div className="container">
          <OrderForm />
        </div> */}
          <button onClick={createOrder} className="btn btn-secondary rounded shadow-none mx-auto">Checkout</button>
        </div>
      </div>
    </>
  )
}

export default Cart;
