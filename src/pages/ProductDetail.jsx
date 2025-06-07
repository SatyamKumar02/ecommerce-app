import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext'; // ✅ import cart context

const ProductDetail = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const { dispatch } = useCart(); // ✅ access dispatch from cart context

  const product = products.find(p => p.id === id);
  const queryParams = new URLSearchParams(search);
  const page = queryParams.get("page") || 1;

  if (!product) return <h2>Product Not Found</h2>;

  const handleAddToCart = () => {
    console.log("Adding to cart:", product); // Add this
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div style={{ padding: '1rem' }}>
      <button onClick={() => navigate(`/products?page=${page}`)}>&larr; Back</button>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="200" />
      <p><strong>Price:</strong> ${product.price}</p>
      <p>{product.description}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
