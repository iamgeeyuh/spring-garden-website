import { useContext } from "react";
import MenuContext from "../../../store/menu-context";

const MenuDropDown = (props) => {
  const ctx = useContext(MenuContext);

  return (
    <select value={ctx.location} onChange={ctx.locationHandler}>
      {ctx.menu.map((section, index) => (
        <option value={index} key={section.id}>
          {section.section}
        </option>
      ))}
    </select>
  );
};

export default MenuDropDown;
