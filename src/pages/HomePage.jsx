// import React from 'react';


// export default function HomePage() {
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold">Welcome to the Store</h2>
//       <p>Browse our collection of awesome products.</p>
//     </div>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products'; // optional if you want to showcase featured products

const HomePage = () => {
  const featured = products.slice(0, 4); // Pick first 4 as featured

  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="text-center py-5 bg-light rounded shadow-sm mb-5">
        <h1 className="display-4 fw-bold">Welcome to My E-Commerce</h1>
        <p className="lead mt-3">
          Discover amazing products at unbeatable prices.
        </p>
        <Link to="/products" className="btn btn-primary btn-lg mt-3">
          Shop Now
        </Link>
      </div>

      {/* Featured Products */}
      <section>
        <h2 className="mb-4 text-center">Featured Products</h2>
        <div className="row g-4">
          {featured.map((product) => (
            <div className="col-12 col-sm-6 col-md-3" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="text-muted">${product.price}</p>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-outline-primary mt-auto"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Optional: Testimonials / Categories */}
      {/* <section className="mt-5 text-center">
        <h3>What our customers say</h3>
        <p className="text-muted">Coming soon...</p>
      </section> */}
    </div>
  );
};

export default HomePage;

