import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { fetchCategories, fetchImageURL, fetchProducts } from "../api";

const Products = (props) => {
  // const { prod } = props;
  
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  


  const getCategories = async () => {
    setLoading(true);
    setCategories(await fetchCategories());
    console.log(categories);
    setLoading(false);
  };

  const getProducts = async () => {
    setLoading(true);
    setProducts(await fetchProducts());
    console.log(products);
    setLoading(false);
  };
  

  useEffect(() => {
    getCategories();
    getProducts()
  }, []);
  
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = categories.filter((x)=>x?.name === cat);
    // console.log(categories?.name)
    setProducts(updatedList[0]?.products);
    // console.log(updatedList[0]?.products , 'soy la lista')
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
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
        {products.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={fetchImageURL(product.image?.url)}
                    className="card-img-top"
                    alt={product.title}
                    height={250}
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title}
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink to={`/products/${product.slug}`} className="btn btn-outline-dark">
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
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Products;
