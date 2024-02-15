import express from "express";
import upLoader from "../helpers/imageLoader.js";
import { Product } from "../models/productModel.js";
import {getProducts, createProduct} from "../controllers/productsControllers.js";

const router = express.Router();

router.get("/productos", getProducts);

router.post("/ingresar", upLoader.single("file"), createProduct);

export default router;
