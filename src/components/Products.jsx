import React from "react";
// import { NavLink } from "react-router-dom";
// import Skeleton from "react-loading-skeleton";

const Products = (props) => {
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
                  className="buttons d-flex justify-content-center "
                  
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
          
        </div>
      </div>
    </>
  );
};

export default Products;
