import React from "react";
import Compras from "./Compras";
// import Coleccion from "./Coleccion";
import Acerca from "../Acerca";
import Favoritos from "./Favoritos";
// import Home from "./Home"
import Petra from "./Petra2.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
            <img className="logo" src={Petra} alt="logo"></img>
        </div>
      </div>

      <div className="iconos">
        <ul>
            <li>Home</li>
          <li>
            <Acerca />
          </li>
          <li>
            <Link to="/coleccion">
              <li>Coleccion</li>
            </Link>
          </li>
          <li>
            <Favoritos />
          </li>
          <li>
            <Compras />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
