import React from "react"
import Compras from "./Compras"
import Coleccion from "./Coleccion"
import Acerca from "./Acerca"
import Favoritos from "./Favoritos"
import Home from "./Home"
import Petra from './Petra2.svg';

const Navbar = () =>{
    return(
        <nav>
            <div>
                <div><div ><img className='logo'src={Petra} alt="logo"></img></div>
                        </div>
                <div className='iconos'>
                    <ul>
                        <li><Home /></li>
                        <li><Acerca /></li>
                        <li><Coleccion /></li>
                        <li><Favoritos /></li>
                        <li><Compras /></li>
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar