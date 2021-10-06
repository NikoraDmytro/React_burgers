import { nanoid } from "@reduxjs/toolkit";
import { Burger } from "../../shared/types/Burgers";
import { addToCartActionType, EditOrderActionType } from "../types/ActionTypes";
import { CartState } from "../types/StateTypes";

export const addToCartAction = (
  state: CartState,
  action: addToCartActionType
) => {
  const newBurger = action.payload;
  const id = nanoid();

  state.totalQuantity += 1;
  state.burgers[id] = {
    quantity: 1,
    burger: newBurger,
  };
};

export const editOrderAction = {
  reducer(state: CartState, action: EditOrderActionType) {
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
};
