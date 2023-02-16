import { useState } from "react";
import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  const [qty, setQty] = useState(0)

  const qtyHandler = () => {
    
  }

  return (
    <div className={styles.menuItem}>
      {props.item.name}
      <form>
        <h4>Amount</h4>
        <input type="number" value={qty}></input>
        <button type="submit">&#43;Add</button>
      </form>
    </div>
  );
};

export default MenuItem;
