import express from "express";
import upLoader from "../helpers/imageLoader.js";
import {getProducts, createProduct, getProductsCat} from "../controllers/productsControllers.js";

const router = express.Router();

router.get("/productos", getProducts);
router.get("/productos/:cat", getProductsCat);
router.post("/ingresar", upLoader.single("file"), createProduct);



export default router;
