import React from "react";
import { useTypedSelector } from "../../store/hooks";
import { CartItem } from "./components/CartItems";

export const CartList = () => {
  const cart = useTypedSelector((state) => state.cart);

  return (
    <ul>
      {Object.entries(cart.burgers).map(([id, item]) => {
        return <CartItem key={id} item={item} />;
      })}
    </ul>
  );
};
