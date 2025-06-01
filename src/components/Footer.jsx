import React from 'react';


export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-auto">
      <p>&copy; {new Date().getFullYear()} My E-Commerce</p>
    </footer>
  );
}
