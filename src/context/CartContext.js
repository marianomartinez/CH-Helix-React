import React, { useState, useContext } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ defaultCart = [], children }) {
  const [cart, setCart] = useState(defaultCart); // Array de items
  // Es nuestro almacén de estado de compra
  // Funciona como una especie de API interna

  
  function addToCart(newItem, qtyToCart) {
    newItem.qtyInCart = qtyToCart;
    const itemCheck = cart.find( ({ id }) => id === newItem.id );
    if (itemCheck === undefined) {
      // Agrega el item y actualiza el estado
      const itemsInCart = [...cart, newItem];
      setCart(itemsInCart);
    } else {
      // Actualiza el item y actualiza el estado
      itemCheck.qtyInCart = itemCheck.qtyInCart + qtyToCart;
    }
  }

  function removeFromCart(itemId) {
    // Remueve el item y actualiza el estado
    setCart(cart.filter(item => item.id !== itemId));
  }

  function clearCart() {
    setCart(defaultCart);
  }

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
    {children}
  </CartContext.Provider>
}
