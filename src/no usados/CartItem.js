const CartItem = ({ data, delFromCart, addToCart }) => {
  let { id, title, price, quantity } = data;
  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{title}</h4>
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
