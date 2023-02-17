import { useContext, useState, useEffect } from "react";
import CartContext from "../../../store/cart/cart-context";
const CartItem = (props) => {
  const ctx = useContext(CartContext);

  const [qty, setQty] = useState(props.item.qty);

  useEffect(() => {
    setQty(ctx.cart.items[props.item.name].qty);
  }, [ctx.cart]);

  const incHandler = () => {
    ctx.onCart({
      type: "INC",
      name: props.item.name,
      qty: 1,
      price: props.item.price,
    });
  };

  const decHandler = () => {
    ctx.onCart({
      type: "DEC",
      name: props.item.name,
      qty: 1,
      price: props.item.price,
    });
  };

  return (
    <div>
      <h2>{props.item.name}</h2>
      <p>
        {props.item.price} x {qty}
      </p>
      <div>${props.item.price * qty}</div>
      <div>
        <button onClick={decHandler}>&#45;</button>
        <button onClick={incHandler}>&#43;</button>
      </div>
    </div>
  );
};

export default CartItem;
