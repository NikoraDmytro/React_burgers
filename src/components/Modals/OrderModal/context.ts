import React from "react";
import { Ingredient } from "../../../shared/types/Burgers";

type OrderContextType = {
  initialValue: Ingredient[];
  ingredients: Ingredient[];
  changeQuantity: (index: number) => (quantity: number) => void;
};

export const OrderContext = React.createContext<OrderContextType>({
  initialValue: [],
  ingredients: [],
  changeQuantity: () => () => {},
});

export const OrderProvider = OrderContext.Provider;
