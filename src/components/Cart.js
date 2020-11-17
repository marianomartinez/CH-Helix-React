import React from 'react';
import { useCartContext } from '../context/CartContext';

const Cart = () => {

  const { cart, removeFromCart, clearCart } = useCartContext();
  console.log(cart);

  return (
    <>
      <div className="container">
        <h3 style={{ textAlign: "center" }}>Your cart contents</h3>
        <ul className="list-unstyled">
          {cart.map(item => (
            <li>
              {item.title} - ${item.price} - x {item.qtyInCart}
              <button onClick={() => removeFromCart(item.id)} className="btn btn-secondary rounded shadow-none ml-1">Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={() => clearCart()} className="btn btn-secondary rounded shadow-none">Clear Cart</button>
        {/* {(() => {
          if (cart.length = 0) {
            return <h3 style={{ textAlign: "center" }}>Your cart is empty</h3>;
          } else {
            return (
              <>
                <h3 style={{ textAlign: "center" }}>Your cart contents</h3>
                <ul className="list-unstyled">
                  {cart.map(item => (
                    <li>
                      {item.title} - ${item.price} - x {item.qtyInCart}
                      <button onClick={() => removeFromCart(item.id)} className="btn btn-secondary rounded shadow-none ml-1">Remove</button>
                    </li>
                  ))}
                </ul>
                <button onClick={() => clearCart()} className="btn btn-secondary rounded shadow-none">Clear Cart</button>
              </>
            );
          }
        })} */}
      </div>
    </>
  )
}

export default Cart;
