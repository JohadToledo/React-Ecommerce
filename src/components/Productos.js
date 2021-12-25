import React, { useContext } from 'react';
import ProdContext from '../contexts/prodContext'
import './productos.css'

const Productos =() =>{
    const {cartProd} = useContext(ProdContext)

    console.log(cartProd)

    return(
        <React.Fragment>
            <div> 
                 
            </div>
        </React.Fragment>
        
    )
    
}

export default Productos