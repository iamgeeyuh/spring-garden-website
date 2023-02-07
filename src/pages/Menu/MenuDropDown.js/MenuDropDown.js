import { useContext, useState } from "react";
import CartContext from "../../../store/cart-context";

const MenuDropDown = (props) => {
  const ctx = useContext(CartContext);

  const [option, setOption] = useState(props.name);

  const changeHandler = (event) => {
    setOption(event.target.value);
  };

  return (
    <select value={option} onChange={changeHandler}>
      {ctx.menu.map((section) => (
        <option value={section.section} key={section.id}>
          {section.section}
        </option>
      ))}
    </select>
  );
};

export default MenuDropDown;
