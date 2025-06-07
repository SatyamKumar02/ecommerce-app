import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { state, dispatch } = useCart();

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleIncrement = (id) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: id });
  };

  const handleDecrement = (id) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: id });
  };

  if (state.cartItems.length === 0) {
    return (
      <div className="container my-5">
        <h2 className="text-center">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Your Cart</h2>
      <div className="row">
        {state.cartItems.map((item) => (
          <div key={item.id} className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: ${item.price}</p>
                <div className="d-flex align-items-center mb-2">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="btn btn-outline-secondary btn-sm me-2"
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="btn btn-outline-secondary btn-sm ms-2"
                  >
                    +
                  </button>
                </div>
                <p className="card-text">
                  <strong>Subtotal:</strong> ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="btn btn-outline-danger"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-end mt-4">
        <Link to="/checkout">
          <button className="btn btn-success">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
