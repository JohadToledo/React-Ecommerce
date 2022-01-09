import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { fetchImageURL, fetchProduct } from "../api";
import Loader from "./Loader";

const Product = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [image, setImage] = useState()

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const getProduct = async () => {
    setLoading(true);
    setProduct(await fetchProduct(slug));
    setLoading(false);
  };

  useEffect(() => {
    getProduct();
  },[]);

  return (
    <React.Fragment>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="col-md-6" key={product.id}>
                {
                  <img
                    src={fetchImageURL(product.image?.url)}
                    alt={product.title}
                    height={400}
                    width={400}
                  />
                }
              </div>
              <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">
                  {product.category}
                </h4>
                <h1 className="display-5">{product.title}</h1>
                <h3 className="dispaly-6 fw-bold my-4">$ {product.price}</h3>
                <p className="lead">{product.description}</p>
                <button
                  className="btn btn-outline-dark px-4 py-2"
                  onClick={() => 
                  addProduct(product)}
                >
                  {" "}
                  Add 
                </button>
                <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                  Go to 🛒
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
