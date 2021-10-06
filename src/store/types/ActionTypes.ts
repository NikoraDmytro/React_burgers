import { PayloadAction } from "@reduxjs/toolkit";
import { Burger } from "../../shared/types/Burgers";

export type addToCartActionType = PayloadAction<Burger>;
export type removeFromCartActionType = PayloadAction<string>;
export type addOneActionType = PayloadAction<string>;
export type removeOneActionType = PayloadAction<string>;
export type EditOrderActionType = PayloadAction<{
  editedBurger: Burger;
  id: string;
}>;
