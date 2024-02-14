import express from "express";
import upLoader from "../helpers/imageLoader.js";
import {Product} from "../models/productModel.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Aca se muestran todos los productos",
  });
});

router.post("/ingresar", upLoader.single("file"), async (req, res) => {
  let newProduct = req.body;
    newProduct.image = req.file.filename;
    // modelo, categoria, descripcion, precio, file;

    let product = new Product(newProduct);
    let data = await product.save()
    console.log(data);

  res.json({
    status: "succes",
    message: "Aca se ingresa los datos a Api",
   data
  });
});

export default router;
