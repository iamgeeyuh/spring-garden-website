import { useContext, useState } from "react";
import CartContext from "../../../store/cart/cart-context";

const MenuItem = (props) => {
  const ctx = useContext(CartContext);

  const [qty, setQty] = useState(0);

  const qtyHandler = (event) => {
    setQty(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    ctx.onCart({
      type: "INC",
      name: props.item.name,
      qty: +qty,
      price: props.item.price,
      id: props.item.id,
    });

    setQty(0);
  };

  return (
    <div>
      {props.item.name}
      <form onSubmit={submitHandler}>
        <h4>Amount</h4>
        <input type="number" value={qty} onChange={qtyHandler}></input>
        <button type="submit">&#43;Add</button>
      </form>
    </div>
  );
};

export default MenuItem;
