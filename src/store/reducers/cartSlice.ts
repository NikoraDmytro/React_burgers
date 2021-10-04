import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Burger } from "../../shared/types/Burgers";
import {
  addToCartAction,
  removeFromCartAction,
  addOneAction,
  removeOneAction,
  EditOrderAction,
} from "../types/ActionTypes";
import { CartState } from "../types/StateTypes";

const initialState: CartState = {
  totalQuantity: 0,
  burgers: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: addToCartAction) => {
      const newBurger = action.payload;
      const id = nanoid();

      state.totalQuantity += 1;
      state.burgers[id] = {
        quantity: 1,
        burger: newBurger,
      };
    },
    editOrder: {
      reducer(state, action: EditOrderAction) {
        const { editedBurger, id } = action.payload;

        state.burgers[id].burger = editedBurger;
      },
      prepare(editedBurger: Burger, id: string) {
        return {
          payload: {
            editedBurger,
            id,
          },
        };
      },
    },
    removeFromCart: (state, action: removeFromCartAction) => {
      const id = action.payload;

      state.totalQuantity -= state.burgers[id].quantity;
      delete state.burgers[id];
    },
    addOne: (state, action: addOneAction) => {
      const id = action.payload;

      state.totalQuantity += 1;
      state.burgers[id].quantity += 1;
    },
    removeOne: (state, action: removeOneAction) => {
      const id = action.payload;

      state.totalQuantity -= 1;
      state.burgers[id].quantity -= 1;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addOne,
  removeOne,
  editOrder,
} = cartSlice.actions;

export default cartSlice.reducer;
