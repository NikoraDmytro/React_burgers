import { createSlice, nanoid } from "@reduxjs/toolkit";
import {
  addToCartAction,
  removeFromCartAction,
  addOneAction,
  removeOneAction,
} from "../types/ActionTypes";
import { CartState } from "../types/StateTypes";

const initialState: CartState = {
  totalQuantity: 0,
  products: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: addToCartAction) => {
      const newBurger = action.payload;
      const id = nanoid();

      state.totalQuantity += 1;
      state.products[id] = {
        quantity: 1,
        product: newBurger,
      };
    },
    removeFromCart: (state, action: removeFromCartAction) => {
      const id = action.payload;

      state.totalQuantity -= state.products[id].quantity;
      delete state.products[id];
    },
    addOne: (state, action: addOneAction) => {
      const id = action.payload;

      state.totalQuantity += 1;
      state.products[id].quantity += 1;
    },
    removeOne: (state, action: removeOneAction) => {
      const id = action.payload;

      state.totalQuantity -= 1;
      state.products[id].quantity -= 1;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addOne,
  removeOne,
} = cartSlice.actions;

export default cartSlice.reducer;
