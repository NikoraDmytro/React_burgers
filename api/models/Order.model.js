import mongoose from "mongoose";
import { BurgerSchema } from "./Burger.model.js";

const OrderSchema = new mongoose.Schema({
  date: Date,
  order: [
    {
      quantity: {
        type: Number,
        required: true,
      },
      burger: BurgerSchema,
    },
  ],
});

export const OrdersModel = mongoose.model("Orders", OrderSchema);
