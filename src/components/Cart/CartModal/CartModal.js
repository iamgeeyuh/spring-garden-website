import { useEffect, useRef, useContext } from "react";
import styles from "./CartModal.module.css";
import CartContext from "../../../store/cart/cart-context";

const CartModal = () => {
  const ctx = useContext(CartContext);
  const modalRef = useRef(null);

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
      Hello
    </div>
  );
};

export default CartModal;
