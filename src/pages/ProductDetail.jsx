import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === id);

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div style={{ padding: '1rem' }}>
      <button onClick={() => navigate(-1)}>&larr; Back</button>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="200" />
      <p><strong>Price:</strong> ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
