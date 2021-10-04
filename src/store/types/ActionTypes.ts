import { PayloadAction } from "@reduxjs/toolkit";
import { Burger } from "../../shared/types/Burgers";

export type addToCartAction = PayloadAction<Burger>;
export type removeFromCartAction = PayloadAction<string>;
export type addOneAction = PayloadAction<string>;
export type removeOneAction = PayloadAction<string>;
export type EditOrderAction = PayloadAction<{
  editedBurger: Burger;
  id: string;
}>;
