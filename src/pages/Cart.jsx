// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { state, dispatch } = useCart();

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  console.log("Cart contents:", state);
  console.log("state.cart:", state.cartItems);
  if (state.cartItems.length === 0) return (<h2>Your cart is empty</h2>);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Your Cart</h2>
      {state.cartItems.map((item) => (
        <div key={item.id} className="border p-2 mb-2">
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <button
            onClick={() => handleRemove(item.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
      <Link to="/checkout">
        <button className="bg-green-600 text-white px-4 py-2 mt-4">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};

export default Cart;
