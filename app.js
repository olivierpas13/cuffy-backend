import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { MONGODB_URI, PORT, SECRET } from "./utils/config.js";
import { auth } from "express-openid-connect";
import pkg from 'express-openid-connect';
// import loginRouter from "./controllers/login.js";
// import userRouter from "./controllers/user.js";
import productsRouter from "./controllers/products.js";

const app = express();

console.log("connecting to", MONGODB_URI);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error.message);
  });

  const baseUrl = process.env.NODE_ENV === 'development'
  ? `http://localhost:3003`
  : "https://cuffy-backend.vercel.app";


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: SECRET,
  baseURL: baseUrl,
  clientID: "DhP0NihlK7e1JRZcFPUyF0nb4EaqDWEo",
  issuerBaseURL: 'https://dev-vf1leamsnvsgn37c.us.auth0.com'
};

app.use(auth(config));

app.use(cors());

app.use(express.static("./.next"));

app.use(express.json());

// app.use(tokenExtractor);

app.get('/', (req, res) => {
  // res.json(req.oidc.idToken).
  req.body = {
    token: req.oidc.idToken,
  }
  res.redirect('http://localhost:3000/admin/dashboard');
});


app.get('/profile', pkg.requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

// app.use(pkg.requiresAuth());

app.use("/api/products", productsRouter);

export default app;
