import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import { BurgersModel } from "./models/Burger.model.js";
import { OrdersModel } from "./models/Order.model.js";

import { parseError } from "./functions/parseError.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8801;
const connectionUrl = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors());

mongoose.connect(connectionUrl);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error"));
db.once("open", () => {
  console.log("Connected successfully");
});

app.get("/", async (req, res) => {
  try {
    const burgers = await BurgersModel.find();

    setTimeout(() => res.status(200).json(burgers), 1000);
  } catch (err) {
    const { status, error } = parseError(err);
    res.status(status).json(error);
  }
});

app.post("/order", async (req, res) => {
  try {
    const order = new OrdersModel({
      _id: new mongoose.Types.ObjectId(),
      date: new Date(),
      order: req.body,
    });

    const result = await order.save();
    res.status(200).json(result);
  } catch (err) {
    const { status, error } = parseError(err);
    res.status(status).json(error);
  }
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
