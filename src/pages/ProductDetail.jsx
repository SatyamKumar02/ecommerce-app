import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const { dispatch } = useCart();

  const product = products.find(p => p.id === id);
  const queryParams = new URLSearchParams(search);
  const page = queryParams.get("page") || 1;

  if (!product) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger">Product Not Found</div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    alert(`${product.name} added to cart successfully!`);
  };

  return (
    <div className="container my-5">
      <button
        className="btn btn-link mb-4"
        onClick={() => navigate(`/products?page=${page}`)}
      >
        &larr; Back to Products
      </button>

      <div className="row">
        <div className="col-md-5">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-7">
          <h2 className="mb-3">{product.name}</h2>
          <h4 className="text-primary mb-3">${product.price}</h4>
          <p>{product.description}</p>
          <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
