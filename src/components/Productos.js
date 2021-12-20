import React from "react";
import Producto from "./Producto";

class Productos extends React.Component {
  state = {
    data: {},
  };
  componentDidMount() {
    this.fetchData("https://fakestoreapi.com/products/1");
  }
  fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, "esta vienendo la data");
    this.setState({
      data: data,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="productos-grid">
          {this.state.data.map((item, i) => {
            return <Producto img={item.image} titulo={item.title} key={i} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Productos;
