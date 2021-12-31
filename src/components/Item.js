import React from "react";
import { NavLink } from "react-router-dom";
import { fetchImageURL } from "../api";

const Items = (props) => {
  const { products } = props;
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <div className="row justify-content-center">
              {products.map((products) => {
                return (
                  <>
                    <div className="col-md-3 mb-4 ">
                      <div
                        className="card h-100 text-center p-4"
                        key={products.id}
                      >
                        <img
                          src={fetchImageURL(products.image.url)}
                          className="card-img-top"
                          alt={products.title}
                          height={250}
                        />
                        <div className="card-body">
                          <h5 className="card-title mb-0">{products.title}</h5>
                          <p className="card-text lead fw-bold">
                            ${products.price}
                          </p>
                          <NavLink
                            to={`/products/${products.slug}`}
                            className="btn btn-outline-dark"
                          >
                            Buy Now
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
