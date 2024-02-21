import express from "express";
import upLoader from "../helpers/imageLoader.js";
import {getProducts, createProduct, getProductsCat, deleteProductById, modifiedProductById} from "../controllers/productsControllers.js";

const router = express.Router();

router.get("/productos", getProducts); // Publico
router.get("/productos/:cat", getProductsCat); //Publico

router.post("/ingresar", upLoader.single("file"), createProduct); // Privado
router.delete("/eliminar/:id",deleteProductById); //Privado
router.patch("/modificar/:id", upLoader.single("file"), modifiedProductById); //Privado



export default router;
