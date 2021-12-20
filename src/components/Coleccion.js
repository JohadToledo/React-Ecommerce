import React from 'react';
import Producto from './Producto'
import Navbar from './Navbar'


const Coleccion = ()=>{
    return(
        <React.Fragment>
            <Navbar />
            <Producto name="Colchon" />
        </React.Fragment>
        
    )
}

export default Coleccion