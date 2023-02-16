import { createContext } from "react";
import { menu } from "./menu-data";

const MenuContext = createContext();

export const MenuContextProvider = (props) => {
  return (
    <MenuContext.Provider
      value={{
        menu: menu,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
