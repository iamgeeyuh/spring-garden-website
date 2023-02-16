import { useContext } from "react";
import img from "../../img/shopping-cart.png";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart/cart-context";

const Cart = () => {
  const ctx = useContext(CartContext);

  const buttonHandler = () => {
    ctx.modalHandler(true);
  };

  return (
    <button onClick={buttonHandler} className={styles.cart}>
      <p>Cart</p>
      <img src={img} alt="A shopping cart."></img>
    </button>
  );
};

export default Cart;
