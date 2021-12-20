import React from "react";
import prod from "./prod1.png";

class Producto extends React.Component {
  render() {
    return (
        <React.Fragment>
            <div>
            <div className="card">
            <img className="card-img" src={prod} alt="Avatar"></img>
            <div className="container">
            <h4><b>{this.props.name}</b></h4>
            <p>Architect & Engineer</p>
            <input name='busqueda'
            onChange={this.onChange} placeholder='problando el onChange' className="cantidadProducto" value={this.props.busqueda}></input>
            </div>
            </div>
        </div>
        </React.Fragment>
    );
}
}

export default Producto;