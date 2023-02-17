import { useEffect, useRef, useContext, useState } from "react";
import styles from "./CartModal.module.css";
import CartContext from "../../../store/cart/cart-context";
import CartItem from "../CartItem/CartItem";
import CartButtons from "../CartButtons/CartButtons";

const CartModal = () => {
  const ctx = useContext(CartContext);
  const modalRef = useRef(null);
  const [total, setTotal] = useState(ctx.cart.total);

  useEffect(() => {
    setTotal(ctx.cart.total);
  }, [ctx.cart]);

  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        ctx.modalHandler(false);
      }
    };
    document.addEventListener("mousedown", clickOutsideHandler);
    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  }, [modalRef]);

  return (
    <div className={styles.modal} ref={modalRef}>
      {Object.values(ctx.cart.items).map((item) => {
        return item.qty !== 0 && <CartItem key={item.id} item={item} />;
      })}
      <div>
        <h2>Total Amount</h2>
        <h2>${total.toFixed(2)}</h2>
        <CartButtons />
      </div>
    </div>
  );
};

export default CartModal;


