import React from 'react';
import products from '../data/products';
import { Link } from 'react-router-dom';

const ProductList = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Products</h2>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <img src={product.image} alt={product.name} width="150" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
