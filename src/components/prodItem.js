import './prodItem.css'

const ProdItems = ({data, addToCart}) =>{
    let {id, name, price, quantity} = data;
    return <div className="prod-card">
    <h4>{name}</h4>
    <h5>${price}</h5>
    <button onClick={() => {addToCart(id)}}>Add</button>
    </div>
}

export default ProdItems;