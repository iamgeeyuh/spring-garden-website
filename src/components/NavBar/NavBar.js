import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import Cart from "../Cart/Cart";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/Menu"
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/Contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Cart />
    </div>
  );
};

export default NavBar;
