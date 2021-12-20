import React from "react";
import Fondo from "./fondop.png";
import Navbar from "./Navbar";
import Producto from "./Producto";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="home">
          <div>
            <img className="home-img" src={Fondo} alt="Home"></img>
          </div>
        </div>
        <Producto />
      </React.Fragment>
    );
  }
}

export default Home;
