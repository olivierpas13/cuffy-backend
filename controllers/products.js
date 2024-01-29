import Router from "express";
import { ObjectId } from 'mongodb';

import productsService from "../services/productService.js";

const productRouter = Router();

const service = new productsService();

productRouter.post("/", async (req, res, next) => {
  try {
    const savedProduct = await service.createProduct(req.body);

    return res.json(savedProduct).status(201).end();
  } catch (error) {
    return next(error);
  }
});

productRouter.get("/", async (req, res, next) => {
  try {
    const products = await service.getProducts();

    return res.json(products).status(200).end();
  } catch (error) {
    return next(error);
  }
});

productRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const newid = new ObjectId(id);

    const product = await service.getProductById(newid);
    return res.json(product).status(200).end();
  } catch (error) {
    return next(error);
  }
});

productRouter.get("/property/:property", async (req, res, next) => {
  try {
    const { property } = req.params;

    const products = await service.getProductsByProperty(property);
    return res.json(products).status(200).end();
  } catch (error) {
    return next(error);
  }
});


export default productRouter;
