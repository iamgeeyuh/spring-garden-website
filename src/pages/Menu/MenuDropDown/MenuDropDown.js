import { useContext, useEffect, useRef } from "react";
import MenuContext from "../../../store/menu/menu-context";

const MenuDropDown = (props) => {
  const ctx = useContext(MenuContext);

  const ref = useRef(null);

  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        props.closeHandler();
      }
    };
    document.addEventListener("mousedown", clickOutsideHandler);
    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  }, [ref]);

  const locationHandler = (event) => {
    ctx.locationHandler(event.target.value);
  };

  return (
    <select value={ctx.location} onChange={locationHandler} ref={ref}>
      {ctx.menu.map((section, index) => (
        <option value={index} key={section.id}>
          {section.section}
        </option>
      ))}
    </select>
  );
};

export default MenuDropDown;
