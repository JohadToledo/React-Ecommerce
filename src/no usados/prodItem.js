import './prodItem.css'

const ProdItems = ({data, addToCart}) =>{
    let {id, title, price, image} = data;
    return <div className="prod-card">
    <h4>{title}</h4>
    <div><img className="size" src={image} alt={title} /></div>
    <h5>${price}</h5>
    <button onClick={() => {addToCart(id)}}>Add</button>
    </div>
}

export default ProdItems;