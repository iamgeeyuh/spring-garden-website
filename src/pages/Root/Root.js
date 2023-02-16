import { Outlet } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import CartModal from "../../components/Cart/CartModal/CartModal";
import styles from "./Root.module.css";
import CartContext from "../../store/cart/cart-context";

const Root = () => {
  const ctx = useContext(CartContext);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(ctx.modal);
  }, [ctx.modal]);

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.scrollContainer}>
        <Outlet />
        {modal && <CartModal />}
        {modal && <div className={styles.dimmedBackground} />}
      </div>
    </div>
  );
};

export default Root;
