import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Products from "./components/Products";
import Product from "./components/product";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import React from "react";

function App() {
  return (
    <><React.Fragment>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route exact path="/products/:id" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
      </Routes>
        <Footer/>
    </React.Fragment>
      
    </>
  );
}

export default App;
