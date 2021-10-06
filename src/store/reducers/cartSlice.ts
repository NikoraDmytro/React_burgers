import { createSlice } from "@reduxjs/toolkit";
import {
  removeFromCartActionType,
  removeOneActionType,
  addOneActionType,
} from "../types/ActionTypes";
import { CartState } from "../types/StateTypes";
import { addToCartAction, editOrderAction } from "../actions/cartActions";

const initialState: CartState = {
  totalQuantity: 0,
  burgers: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: addToCartAction,
    editOrder: editOrderAction,
    removeFromCart: (state, action: removeFromCartActionType) => {
      const id = action.payload;

      state.totalQuantity -= state.burgers[id].quantity;
      delete state.burgers[id];
    },
    addOne: (state, action: addOneActionType) => {
      const id = action.payload;

      state.totalQuantity += 1;
      state.burgers[id].quantity += 1;
    },
    removeOne: (state, action: removeOneActionType) => {
      const id = action.payload;

      state.totalQuantity -= 1;
      state.burgers[id].quantity -= 1;
    },
    clearCart: (state) => {
      state.totalQuantity = 0;
      state.burgers = {};
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addOne,
  removeOne,
  editOrder,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
