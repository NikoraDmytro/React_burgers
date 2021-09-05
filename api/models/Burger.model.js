import mongoose from "mongoose";

const BurgerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

export const BurgersModel = mongoose.model("Burgers", BurgerSchema, "Burgers");
