import { useContext } from "react";
import CartContext from "../../../store/cart/cart-context";

const CartButtons = () => {
  const ctx = useContext(CartContext);

  const closeHandler = () => {
    ctx.modalHandler(false);
  };

  const orderHandler = () => {
    console.log("Ordering...");
  };

  return (
    <div>
      <button onClick={closeHandler}>Close</button>
      <button onClick={orderHandler}>Order</button>
    </div>
  );
};

export default CartButtons;
