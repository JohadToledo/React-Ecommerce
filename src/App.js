import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Products from "./components/Products";
import Product from "./components/product";
import Checkout from "./components/Checkout";
import Checkouted from "./components/Checkouted";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import React from "react";

function App() {
  return (
    <><React.Fragment>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/checkouted" element={<Checkouted />}></Route>
          <Route exact path="/products/:slug" element={<Product />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
        <Footer/>
    </React.Fragment>
      
    </>
  );
}

export default App;
