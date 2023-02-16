import { useContext } from "react";
import styles from "./Menu.module.css";
import img from "../../img/menu.jpg";
import MenuList from "./MenuList/MenuList";
import MenuSection from "./MenuSection/MenuSection";
import MenuContext from "../../store/menu/menu-context";

const Menu = () => {
  const ctx = useContext(MenuContext);

  return (
    <div className={styles.menu}>
      <h1>Our Menu</h1>
      <img src={img} alt="A table full of Chinese food."></img>
      <div className={styles.menuMain}>
        <MenuList />
        <div>
          {ctx.menu.map((section) => {
            return (
              <MenuSection
                name={section.section}
                items={section.items}
                key={section.id}
                id={section.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
