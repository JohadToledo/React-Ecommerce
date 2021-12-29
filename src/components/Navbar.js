import React from "react";
import Petra from "./Petra.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  console.log(state);
  return (
    <nav>
      <div>
        <div>
          <NavLink to="/" >
            <img className="logo navbar-brand" src={Petra} alt="logo"></img>
          </NavLink>
        </div>
      </div>

      <div  className="iconos float-lg-end text-black">
        <ul >
          <NavLink to="/" style={{color:"black"}}>
            <li className="nav-item">Home</li>
          </NavLink>
          <NavLink to="/acerca" style={{color:"black"}}>
            <li className="nav-item">Acerca</li>
          </NavLink>
          <NavLink to="/products" style={{color:"black"}}>
            <li className="nav-item">Coleccion</li>
          </NavLink>
          <NavLink to="/login" style={{color:"black"}}>
            <li>
              <button>Login</button>
            </li>
          </NavLink>
          <NavLink to="/register">
            <li>
              <button>Register</button>
            </li>
          </NavLink>
          <NavLink to="/cart" style={{color:"black"}}>
            <li className="nav-item"  >🛒 {state.length}</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
