import React, { useContext, useEffect, useRef } from "react";
import styles from "./Menu.module.css";
import img from "../../img/menu.jpg";
import MenuSection from "./MenuSection/MenuSection";
import MenuContext from "../../store/menu-context";

const Menu = () => {
  const ctx = useContext(MenuContext);

  const refList = useRef([]);

  useEffect(() => {
    if (refList.current.length === 0) {
      for (let i = 0; i < ctx.menu.length; i++) {
        refList.current[i] = React.createRef();
      }
    }
  }, [ctx]);

  useEffect(() => {
    if (ctx.location && refList.current[ctx.location]) {
      refList.current[ctx.location].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [ctx]);

  return (
    <div className={styles.menu}>
      <h1>Our Menu</h1>
      <img src={img} alt="A table full of Chinese food."></img>
      {ctx.menu.map((section, index) => {
        return (
          <MenuSection
            key={section.id}
            items={section.items}
            ref={refList.current[index]}
          />
        );
      })}
    </div>
  );
};

export default Menu;
