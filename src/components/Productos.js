import React from 'react';
import Producto2 from './Producto2'

class Productos extends React.Component {
    state ={
        busqueda: '',
        data: {
            image: '',
            title: '',
        },
    }

    componentDidMount() {
        this.fetchData('https://fakestoreapi.com/products/1')
    }

    fetchData = async url =>{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data, 'esta vienendo la data')
        this.setState({
            data: data
        })
    }
    onChange = e =>{
        this.setState({ [e.target.name] : e.target.value })
        console.log(e.target.value)
    }
    render() {
        return(
            <div>
                <div className="card">
                    <Producto2 />
                </div>    
            </div>
                )
            }
        }
            // <div className="row">
                // {this.data.map((item, i) => {
                //     return (
                //       <Producto2
                //         img={item.image}
                //         titulo={item.title}
                //         key={i}
                //       />
                //     );
                //   })}
                // </div>
            export default Productos