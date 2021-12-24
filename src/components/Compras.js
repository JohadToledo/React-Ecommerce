import { useEffect, useReducer, useState } from "react";
import {TYPES} from "../actions/shoppingActions"
import {
  shoppingReducer,
  shoppingInitialState,
} from "../reducers/shoppingReducers";
import React from "react";
// import Producto from './Producto'
import ProdItem from "./prodItem";
import {prodApi} from "../api"
import './compras.css';
import CartItem from './CartItem'

const Compras = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const [productos, setProductos] = useState([])

  const fetchProducts = async () =>{
    try {
      const data = await prodApi();
      console.log(data, 'la nueva')
      setProductos(data)
    }catch(err) {

    }
  }

  useEffect(()=>{
    fetchProducts();

  }, []);

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
      {productos.map((product) => (
        <ProdItem key={product.id} data={product} addToCart={addToCart} />
        ))}
        
        </article>
      <h2>Carrito</h2>
      <article className="box">
      <button onClick={cleanCart}>Clean Cart</button>
      { 
          cart.map((item, index) => <CartItem key={index} data={item} delFromCart={delFromCart} addToCart={addToCart}/>)
      }
      </article>
    </div>
  );
};

export default Compras;
        // <Producto productos={productos} />