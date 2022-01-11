import React from "react";
import Petra from "./Petra.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  const totalItems=()=>{
    let sum = 0 ;
    for (let i = 0; i < state.length; i++){
      sum += state[i].quantity 
    }
    return sum
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center"></div>
        <div className="row">
          <div className="col">
            <NavLink to="/">
              <img className="logo navbar-brand" src={Petra} alt="logo"></img>
            </NavLink>
          </div>
          <div className="col-md-auto">
            <NavLink to="/"  className='nav-linky'>
              Home
            </NavLink>
          </div>
          <div className="col-md-auto">
            <NavLink to="/acerca"  className='nav-linky'>
              About us
            </NavLink>
          </div>
          <div className="col-md-auto">
            <NavLink to="/cart"  className='nav-linky'>
              🛒 {totalItems()}
            </NavLink>
          </div>
        </div>
      <hr />
      </div>
    </>
  );
};

export default Navbar;
