import { useEffect, useReducer, useState } from "react";
import {TYPES} from "../actions/shoppingActions"
import React from "react";
import ProdItem from "./prodItem";
import {prodApi} from "../api"
import {
  shoppingReducer,
  shoppingInitialState,
} from "../reducers/shoppingReducers";
import './compras.css';
import CartItem from './CartItem'

const Compras = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart, data } = state;

  const onClick = async (e) =>{
    e.preventDefault();
    const data = await prodApi();
    console.log(data);
  }

  const addToCart = (id) => {
      console.log(id);
      dispatch({type: TYPES.ADD_TO_CART, payload: id});
  };
  const delFromCart = (id, all = false) => {
    console.log(id, all);
    if(all){
      dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id})
    }else{
      dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload: id})
    }
  };

  const cleanCart = () => {
      dispatch({type:TYPES.CLEAR_CART });
  };

  return (
    <div>
      <h2>Productos</h2>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProdItem key={product.id} data={product} addToCart={addToCart} />
        ))}
        <button onClick={onClick}>Prod console</button>
      </article>
      <h2>Carrito</h2>
      <article className="box">
      <button onClick={cleanCart}>Clean Cart</button>
      { 
          cart.map((item, index) => <CartItem key={index} data={item} delFromCart={delFromCart} addToCart={addToCart}/>)
      }
      { 
        // data.map((item, index) => <CartItem key={index} data={item.price})
      }
      </article>
    </div>
  );
};

export default Compras;