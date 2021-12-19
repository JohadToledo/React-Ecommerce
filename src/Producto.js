import React from 'react';
import  prod1  from './prod1.png'

const onChange = (e)=>{
    console.log(e.target.value)
}

const Producto = ()=>{
    return(
<div>
    <div className="card">
    <img className="card-img" src={prod1} alt="Avatar"></img>
    <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
    <input onChange{...onChange} placeholder='problando el onChange'className="cantidadProducto" />
    </div>
    </div>

    <div className="card">
    <img className="card-img" src={prod1} alt="Avatar"></img>
    <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
    <input type="number" className="cantidadProducto"></input>
    </div>
    </div>

    <div className="card">
    <img className="card-img" src={prod1} alt="Avatar"></img>
    <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
    <input type="number" className="cantidadProducto"></input>
    </div>
    </div>

    <div className="card">
    <img className="card-img" src={prod1} alt="Avatar"></img>
    <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
    <input type="number" className="cantidadProducto"></input>
    </div>
    </div>

    <div className="card">
    <img className="card-img" src={prod1} alt="Avatar"></img>
    <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
    <input type="number" className="cantidadProducto"></input>
    </div>
    </div>

    <div className="card">
    <img className="card-img" src={prod1} alt="Avatar"></img>
    <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
    <input type="number" className="cantidadProducto"></input>
    </div>
    </div>

    <div className="card">
    <img className="card-img" src={prod1} alt="Avatar"></img>
    <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
    <input type="number" className="cantidadProducto"></input>
    </div>
    </div>

    <div className="card">
    <img className="card-img" src={prod1} alt="Avatar"></img>
    <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
    <input type="number" className="cantidadProducto"></input>
    </div>
    </div>

    <div className="card">
    <img className="card-img" src={prod1} alt="Avatar"></img>
    <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
    <input type="number" className="cantidadProducto"></input>
    </div>
    </div>

    <div className="card">
    <img className="card-img" src={prod1} alt="Avatar"></img>
    <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
    <input type="number" className="cantidadProducto"></input>
    </div>
    </div>

    <div className="card">
    <img className="card-img" src={prod1} alt="Avatar"></img>
    <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
    <input type="number" className="cantidadProducto"></input>
    </div>
    </div>

    <div className="card">
    <img className="card-img" src={prod1} alt="Avatar"></img>
    <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
    <input type="number" className="cantidadProducto"></input>
    </div>
    </div>
</div>
    )
}

export default Producto