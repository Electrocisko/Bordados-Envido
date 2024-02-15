import express from "express";
import upLoader from "../helpers/imageLoader.js";
import { Product } from "../models/productModel.js";

const router = express.Router();

router.get("/productos", async (req, res) => {

  const data = await Product.find();
  res.json({
    status: "success",
    data
  });
});

router.post("/ingresar", upLoader.single("file"), async (req, res) => {
  let newProduct = req.body;
  newProduct.image = req.file.filename;
  // modelo, categoria, descripcion, precio, file;
  let product = new Product(newProduct);
  let data = await product.save();
  res.json({
    status: "succes",
    data,
  });
});

export default router;
