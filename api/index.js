import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {MONGODB_URI} from './utils/config.js'
import morgan from "morgan";
import productsRouter from "./controllers/products.js";

const app = express();

const PORT = process.env.PORT;

console.log("connecting to", MONGODB_URI);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error.message);
  });

app.use(cors());

app.use(morgan('dev'))

app.use(express.json());

app.get('/', (req, res) => {
    res.json("Cuffy Backend")
});

app.use("/api/products", productsRouter);

app.listen(PORT, ()=> console.log("Server ready at port "+ PORT));

export default app;
