import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { fetchCategories, fetchProducts, fetchImageURL } from "../api";

const Products = (props) => {
  console.log(props, 'en producst como props');
  const { categories } = props;
  
  return (
    <>
      <div className="container my-5 py-5">
        <div className="display-6 fw-bolder text-center">
          <div className="row">
            <div className="col-12">
              <h1 className="display-6 fw-bolder text-center">Productos</h1>
              <hr />
            </div>
          </div>
          {categories.map((products) => {
            return (
              <div className="row justify-content-center d-inline-block">
                <div
                  className="buttons d-flex justify-content-center mb-5 pb-5 "
                  
                >
                  <button key={products.id}
                    className="btn btn-outline-dark me-2"
                    // onClick={() => filterProduct("electronics")} <div >
                  >
                    {products.name}
                  </button>
                </div>
              </div>
            );
          })}
          {/* {products && (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={products.id}>
                  <img
                    src={fetchImageURL(products.image.url)}
                    className="card-img-top"
                    alt={products.title}
                    height={250}
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {products.title}
                    </h5>
                    <p className="card-text lead fw-bold">${products.price}</p>
                    <NavLink
                      to={`/products/${products.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Products;
