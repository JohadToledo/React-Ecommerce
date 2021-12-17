import React from "react"
import Compras from "./Compras"

const Navbar = () =>{
    return(
        <nav>
            <div> 
                <div>
                    <div className='navbar'>Petra</div>
                </div>
                <div className='iconos'>
                    <div>Acerca dr nosotros</div>
                    <div><Compras /></div>
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar