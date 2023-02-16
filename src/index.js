import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MenuContextProvider } from "./store/menu/menu-context";
import { CartContextProvider } from "./store/cart/cart-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContextProvider>
    <MenuContextProvider>
      <App />
    </MenuContextProvider>
  </CartContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
