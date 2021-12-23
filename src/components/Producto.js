import React from 'react';

const Producto = (props) =>{
    console.log(props)
    const {productos} = props
    return(
            <div className="prod-card">
            {productos.map((producto, idx) =>{
                return(
                    <React.Fragment>
                        <div key={productos.id}>{producto.title}</div>
                        <div className="grid-responsive prod-card"><img className='size' src={producto.image} alt="Avatar" /></div>
                    </React.Fragment>
                    
                )
            })}
            
            </div>    
        
            )
        }

    export default Producto