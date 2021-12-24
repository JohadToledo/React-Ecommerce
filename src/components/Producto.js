import React from "react";


const Producto = (props, addToCart) => {
  const { productos } = props;
  return (
    <div className="prod-card grid-responsive">
      {productos.map((producto, idx) => {
        return (
          <React.Fragment>
            <div className="box">
              <div key={producto.id}>{producto.title}</div>
              <div>
                <img className="size" src={producto.image} alt={producto.title} />
              </div>
                <div>$ {producto.price}</div>
                <div><button onClick={() => {addToCart(producto.id)}}>Add</button></div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Producto;
