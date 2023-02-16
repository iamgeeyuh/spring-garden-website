import { forwardRef, useState, useContext, useRef } from "react";
import styles from "./MenuSection.module.css";
import MenuDropDown from "../MenuDropDown/MenuDropDown";
import MenuItem from "../MenuItem/MenuItem";
import MenuContext from "../../../store/menu/menu-context";

const MenuSection = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [shouldClose, setShouldClose] = useState(false);

  const openHandler = () => {
    if (!shouldClose) {
      setOpen(true);
    } else {
      setShouldClose(false);
    }
  };

  const closeHandler = () => {
    setOpen(false);
    setShouldClose(true);
  };

  return (
    <div className={styles.menuSection} ref={ref}>
      <span>
        <h2 onClick={openHandler}>{props.name}</h2>
      </span>
      {open && <MenuDropDown closeHandler={closeHandler} />}
      {props.items.map((item) => {
        return <MenuItem item={item} key={item.id} />;
      })}
    </div>
  );
});

export default MenuSection;
