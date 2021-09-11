import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import { BurgersModel } from "./models/Burger.model.js";

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
    if (err.response) {
      res.status(err.response.status).json(err.response);
    } else if (err.request) {
      res.status(500).json(err.request);
    } else {
      res.status(500).json(err.message);
    }
  }
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
