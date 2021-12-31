import React from "react";
// import Products from "./Products.jsx";
import Acerca from "./Acerca"

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="hero ">
          <div className="card bg-dark text-black border-0">
            <img src='https://10ecommercetrends.com/wp-content/uploads/2019/11/yellow-dance.jpg' className="card-img" alt="Background" height="550px" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">Nuevos Productos</h5>
              <p className="card-text lead fs-2">
              </p>
            </div>
            
            </div>
          </div>
        </div>
        <Acerca />
      </React.Fragment>
    );
  }
}

export default Home;
