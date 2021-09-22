import { createSlice } from "@reduxjs/toolkit";
import { addToCartAction, removeFromCartAction } from "../types/ActionTypes";
import { CartState } from "../types/StateTypes";

const initialState: CartState = {
  quantity: 0,
  burgers: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: addToCartAction) => {
      const newBurger = action.payload;
      const id = newBurger._id;

      state.quantity += 1;
      state.burgers[id] = newBurger;
    },
    removeFromCart: (state, action: removeFromCartAction) => {
      const id = action.payload;

      state.quantity -= 1;
      delete state.burgers[id];
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
