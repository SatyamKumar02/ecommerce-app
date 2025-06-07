import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-light text-center text-muted py-3 mt-auto border-top">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} My E-Commerce
        </p>
      </div>
    </footer>
  );
}
