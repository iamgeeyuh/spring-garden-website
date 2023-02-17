import { createContext, useState, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  console.log(state)
  switch (action.type) {
    case "INC":
      if (!state.items.hasOwnProperty(action.name)) {
        state.items[action.name] = {
          name: action.name,
          qty: 0,
          price: action.price,
          id: action.id,
        };
      }
      state.items[action.name].qty += action.qty;
      console.log(state.items);
      return {
        items: state.items,
        total: (state.total += action.price * action.qty),
        qty: (state.qty += action.qty),
      };
    case "DEC":
      state.items[action.name].qty -= action.qty;
      return {
        items: state.items,
        total: (state.total -= action.price * action.qty),
        qty: (state.qty -= action.qty),
      };
    default:
      return state;
  }
};

export const CartContextProvider = (props) => {
  const [modal, setModal] = useState();

  const modalHandler = (value) => {
    setModal(value);
  };

  const [cart, setCart] = useReducer(cartReducer, {
    items: {},
    total: 0,
    qty: 0,
  });

  return (
    <CartContext.Provider
      value={{
        modal: modal,
        modalHandler: modalHandler,
        cart: cart,
        onCart: setCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
