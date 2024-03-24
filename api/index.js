import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {MONGODB_URI} from './utils/config.js'
// import { auth } from "express-openid-connect";
import morgan from "morgan";
// import pkg from 'express-openid-connect';
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

  // const baseUrl = process.env.NODE_ENV === 'development'
  // ? `http://localhost:3003`
  // : "https://cuffy-backend.vercel.app";


// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: SECRET,
//   baseURL: baseUrl,
//   clientID: "DhP0NihlK7e1JRZcFPUyF0nb4EaqDWEo",
//   issuerBaseURL: 'https://dev-vf1leamsnvsgn37c.us.auth0.com'
// };

// app.use(auth(config));

app.use(cors());

app.use(morgan('dev'))

// app.use(express.static("./.next"));

app.use(express.json());

// app.use(tokenExtractor);

app.get('/', (req, res) => {
    res.json("Cuffy Backend")
});


// app.get('/profile', pkg.requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });


app.use("/api/products", productsRouter);

app.listen(PORT, ()=> console.log("Server ready at port 3000"));

export default app;
