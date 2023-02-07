import { useContext, useState } from "react";
import styles from "./Menu.module.css";
import img from "../../img/menu.jpg";
import MenuSection from "./MenuSection/MenuSection";
import CartContext from "../../store/cart-context";

const Menu = () => {
  const ctx = useContext(CartContext);

  return (
    <div className={styles.menu}>
      <h1>Our Menu</h1>
      <img src={img} alt="A table full of Chinese food."></img>
      {ctx.menu.map((section) => {
        return (
          <MenuSection
            name={section.section}
            key={section.id}
            items={section.items}
          />
        );
      })}
    </div>
  );
};

export default Menu;
