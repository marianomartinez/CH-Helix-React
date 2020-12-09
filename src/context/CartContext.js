import React, { useState, useContext } from 'react';

export const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ defaultCart = [], children }) {
  const [cart, setCart] = useState(defaultCart);

  // ADD OR UPDATE ITEM TO CART
  function addToCart(newItem, qtyToCart) {
    newItem.qtyInCart = qtyToCart;
    const itemCheck = cart.find( ({ id }) => id === newItem.id );
    if (itemCheck === undefined) {
      // Add item to cart
      const itemsInCart = [...cart, newItem];
      setCart(itemsInCart);
    } else {
      // Update quantity of item in cart
      itemCheck.qtyInCart = itemCheck.qtyInCart + qtyToCart;
    }
  };

  // REMOVE ITEM FROM CART
  function removeFromCart(itemId) {setCart(cart.filter(item => item.id !== itemId))};

  // REMOVE EVERYTHING FROM CART
  function clearCart() {setCart(defaultCart)};

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>
};