import { PayloadAction } from "@reduxjs/toolkit";
import { Burger } from "../../shared/types/Burgers";

export type addToCartAction = PayloadAction<Burger>;
export type removeFromCartAction = PayloadAction<string>;
