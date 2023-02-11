import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import MenuDropDown from "../MenuDropDown.js/MenuDropDown";

const MenuSection = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <MenuDropDown />
      <div>
        {props.items.map((item) => {
          return (
            <MenuItem
              stats={item}
              key={Math.floor(Math.random() * 1000000000)}
            />
          );
        })}
      </div>
    </div>
  );
});

export default MenuSection;
