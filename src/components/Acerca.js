import React, { useEffect, useState } from "react";
// import Skeleton from "react-loading-skeleton";
// import { NavLink } from "react-router-dom";
import { fetchCategories, fetchProducts } from "../api";
import Products from "./Products";
import Items from "./Item";

export default function Acerca() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const getCat = async () => {
    try {
      const data = await fetchCategories();
      // console.log(data, 'data.result')
      // const promises = data.map(async( product) =>{
      //     return await fetchProducts(product)
      // })
      // const result = await Promise.all(promises)
      // console.log(result, 'promesaas')
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getProd = async () => {
    setProducts(await fetchProducts());
  };

  useEffect(() => {
    getCat();
    getProd();
  }, []);

  return (
    <>
      <div className="Acerca">
        <Products categories={categories} />
        {/* <Items products={products} /> */}
      </div>
    </>
  );
}
