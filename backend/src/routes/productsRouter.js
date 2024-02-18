import express from "express";
import upLoader from "../helpers/imageLoader.js";
import {getProducts, createProduct, getProductsCat, deleteProductById, modifiedProductById} from "../controllers/productsControllers.js";

const router = express.Router();

router.get("/productos", getProducts);
router.get("/productos/:cat", getProductsCat);
router.post("/ingresar", upLoader.single("file"), createProduct);
router.delete("/eliminar/:id",deleteProductById);
router.patch("/modificar/:id", upLoader.single("file"), modifiedProductById);



export default router;
