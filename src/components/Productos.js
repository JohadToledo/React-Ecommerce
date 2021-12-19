import React from 'react';
import Producto from './Producto';


class Productos extends React.Component {
    render() {
        return(
            <div className="productos-grid"> 
            <ul>
                <li><Producto name="Calcetis"/></li>
            </ul>
            </div>
        )
    }
}
    


export default Productos