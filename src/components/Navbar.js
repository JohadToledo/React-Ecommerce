import React from "react";
import Petra from "./Petra2.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav >
      <div>
        <div>
            <NavLink to='/'><img className="logo navbar-brand" src={Petra} alt="logo"></img></NavLink>
        </div>
      </div>

      <div className="iconos">
        <ul >
            <NavLink to='/'><li className="nav-item">Home</li></NavLink>
            <NavLink to='/acerca'><li className="nav-item">Acerca</li></NavLink>
            <NavLink to="/products"><li className="nav-item">Coleccion</li></NavLink>
            <NavLink to="/favoritos"><li className="nav-item">Favoritos</li></NavLink>
            <NavLink to="/cart"><li className="nav-item">🛒 (0)</li></NavLink>
            <NavLink to="/login"><li><button>Login</button></li></NavLink>
            <NavLink to="/register"><li><button>Register</button></li></NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
