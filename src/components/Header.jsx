import React from 'react';
import { Link } from 'react-router-dom';

export default function Header  ()  {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/products" className="text-xl font-bold">My E-Commerce</Link>
      <nav>
        <Link to="/cart" className="ml-4">Cart</Link>
      </nav>
    </header>
  );
};
