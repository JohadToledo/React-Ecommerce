import { useReducer } from "react";
import React from "react";
import ProdItem from "./prodItem";
import {
  shoppingReducer,
  shoppingInitialState,
} from "../reducers/shoppingReducers";

const Compras = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const addToCart = (id) => {};

  const delFromCart = () => {};

  const cleanCart = () => {};

  return (
    <div>
      <h2>Productos</h2>
      <article className="box">
        {products.map((product) => (
          <ProdItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h2>Carrito</h2>
      <article className="box"></article>
    </div>
  );
};

export default Compras;