import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchCategories, fetchImageURL, fetchProducts } from "../api";
import Loader from "./Loader";

const Products = (props) => {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    setLoading(true);
    setCategories(await fetchCategories());
    setLoading(false);
  };

  const getProducts = async () => {
    setLoading(true);
    setProducts(await fetchProducts());
    setLoading(false);
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = categories.filter((x) => x?.name === cat);
    setProducts(updatedList[0]?.products);
  };

  const ShowProducts = () => {
    return (
      <>
      <div className="container ">
        <div className="row  buttons d-flex justify-content-center mb-5 pb-5">
        <div className="center">
          <button
            className=" btn btn-outline-dark me-2"
            onClick={() => getProducts()}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Back")}
          >
            Back
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Front")}
          >
            Front
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("SSG")}
          >
            SSG
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Container")}
          >
            Container
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Database")}
          >
            Database
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Other")}
          >
            Other
          </button>
        </div>
        </div>
      </div>
        {products.map((product) => {
          return (
            <>
              <div className="cards col-md-3 mb-4 center" key={product.id}>
                <div className="card h-100 text-center p-4" >
                  <div className='card-img center'>
                  <img
                    src={fetchImageURL(product.image?.url)}
                    className=""
                    alt={product.title}
                    height={250}
                  />
                  </div>
                  <div className="card-body center" key={product.id}>
                    <h5 className="card-title mb-0 center">{product.title}</h5>
                    <p className="card-text lead fw-bold center">${product.price}</p>
                    <NavLink
                      to={`/products/${product.slug}`}
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
      </>
    );
  };
  return (
    <div>
      <React.Fragment>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="display-6 fw-bolder text-center">Products</h1>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            {loading ? <Loader /> : <ShowProducts />}
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Products;
