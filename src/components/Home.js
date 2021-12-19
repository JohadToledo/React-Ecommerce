import React from 'react';
import Fondo from '../fondop.png'

class Home extends React.Component {
    render() {
    return (
        <div className="home">
            <div >
            <img className="home-img" src={Fondo} alt="Home" ></img>
            </div>
        </div>
        
    )
}
}

export default Home