import React from 'react';
import './productos.css'

class Productos extends React.Component {
    state ={
        loading: true,
        title: '',
        image: '',

        }

        async componentDidMount(){
            const url = 'https://fakestoreapi.com/products/1'
            const response = await fetch(url);
            const data = await response.json();
            this.setState({ title: data.title, image: data.image, loading: false});
            // console.log(data);
        }

render() {
    return(
        <React.Fragment>
            <div> 
                {this.state.loading || !this.state.title ? (<div> loading...</div>) : (<div>
                <div className='title'>{this.state.title}</div>
                <img className='img' alt={this.state.title} src={this.state.image}></img>
                </div>)}
            </div>
        </React.Fragment>
        
    )
    
}
}

export default Productos