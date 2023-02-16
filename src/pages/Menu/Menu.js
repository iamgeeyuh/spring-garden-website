import { useContext, useEffect, useRef, createRef } from "react";
import styles from "./Menu.module.css";
import img from "../../img/menu.jpg";
import MenuSection from "./MenuSection/MenuSection";
import MenuContext from "../../store/menu/menu-context";

const Menu = () => {
  const ctx = useContext(MenuContext);

  const refList = useRef([]);

  useEffect(() => {
    if (refList.current.length === 0) {
      for (let i = 0; i < ctx.menu.length; i++) {
        refList.current[i] = createRef();
      }
    }
  }, [ctx]);

  useEffect(() => {
    if (ctx.location && refList.current[ctx.location]) {
      refList.current[ctx.location].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      ctx.locationHandler("");
    }
  }, [ctx]);

  return (
    <div className={styles.menu}>
      <h1>Our Menu</h1>
      <img src={img} alt="A table full of Chinese food."></img>
      <div>
        {ctx.menu.map((section, index) => {
          return (
            <MenuSection
              name={section.section}
              items={section.items}
              key={section.id}
              ref={refList.current[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
