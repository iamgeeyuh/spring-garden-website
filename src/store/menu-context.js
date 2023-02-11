import { createContext, useState } from "react";
import { menu } from "./menu-data";

const MenuContext = createContext();

export const MenuContextProvider = (props) => {
  const [location, setLocation] = useState();

  const locationHandler = (event) => {
    setLocation(event.target.value);
    console.log(event.target.value);
  };

  return (
    <MenuContext.Provider
      value={{
        menu: menu,
        location: location,
        locationHandler: locationHandler,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
