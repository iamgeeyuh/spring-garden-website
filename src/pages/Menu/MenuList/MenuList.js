import { useContext } from "react";
import styles from "./MenuList.module.css";
import MenuContext from "../../../store/menu/menu-context";

const MenuList = () => {
  const ctx = useContext(MenuContext);

  const scrollHandler = (event, id) => {
    event.preventDefault();
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <nav className={styles.menuList}>
      <ul>
        {ctx.menu.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(event) => scrollHandler(event, section.id)}
            >
              {section.section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuList;
