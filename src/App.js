import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Products from "./components/Products";
import Product from "./components/product";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <><React.Fragment>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<Product />}></Route>
      </Routes>
        <Footer/>
    </React.Fragment>
      
    </>
  );
}

export default App;
