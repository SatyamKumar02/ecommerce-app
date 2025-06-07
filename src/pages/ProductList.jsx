import React, { useState, useEffect } from "react";
import products from "../data/products";
import { Link, useSearchParams } from "react-router-dom";

const ITEMS_PER_PAGE = 8;

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageFromURL = parseInt(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromURL);

  useEffect(() => {
    setSearchParams({ page: currentPage });
  }, [currentPage, setSearchParams]);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="container my-4">
      <div className="row g-4">
        {selectedProducts.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted">${product.price}</p>
                <Link
                  to={`/product/${product.id}?page=${currentPage}`}
                  className="btn btn-primary mt-auto"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4 flex-wrap gap-2">
        <button
          onClick={() => {
            setCurrentPage((prev) => Math.max(prev - 1, 1));
            window.scrollTo(0, 0);
          }}
          disabled={currentPage === 1}
          className="btn btn-outline-secondary"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => {
              setCurrentPage(page);
              window.scrollTo(0, 0);
            }}
            className={`btn ${
              currentPage === page ? "btn-primary" : "btn-outline-secondary"
            }`}
            disabled={currentPage === page}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => {
            setCurrentPage((prev) => Math.min(prev + 1, totalPages));
            window.scrollTo(0, 0);
          }}
          disabled={currentPage === totalPages}
          className="btn btn-outline-secondary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
