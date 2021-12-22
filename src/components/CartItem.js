const CartItem = ({ data, delFromCart, addToCart }) => {
  let { id, name, price, quantity } = data;
  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>${price} ${price * quantity}</h5>
      <div>
      <button onClick={() => delFromCart(id)}>➖</button> 
      <h5>{quantity}</h5>
      <button onClick={() => addToCart(id)}>➕</button>
      <button onClick={() => delFromCart(id, true)}>🗑</button>
      </div>
    </div>
  );
};

export default CartItem;
