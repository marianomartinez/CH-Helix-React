import React from 'react';

const OrderCompleted = (orderId) => {
  return (
    <div className="container">
      <h2 className="pt-5 text-center">
        <p>Your order ID is {orderId}</p>
      </h2>
    </div>
  )
}

export default OrderCompleted;
