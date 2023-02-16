import { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [modal, setModal] = useState();

  const modalHandler = (value) => {
    setModal(value);
  };

  return (
    <CartContext.Provider
      value={{
        modal: modal,
        modalHandler: modalHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
