import { Product } from "../models/productModel.js";
import mongoose from "mongoose";
import fs from "fs";

export const getProducts = async (req, res) => {
  try {
    const data = await Product.find().lean();
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error en obtener productos",
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    let newProduct = req.body;
    const { modelo, categoria, precio } = newProduct;
    if (req.file) {
      newProduct.image = req.file.filename;
      const imageSplit = req.file.filename.split(".");
      const extension = imageSplit[1];
      if (extension != "png" && extension != "jpg" && extension != "webp") {
        throw new Error("Archivo adjunto no valido.");
      }
      if (req.file.size > 300000)
        throw new Error("El archivo no puede superar 300Kb");
    } else {
      newProduct.image = "logo-envido.png";
    }
    if (!modelo || categoria == "Seleccione categoría" || !precio) {
      throw new Error("Falta datos");
    }
    let product = new Product(newProduct);
    let data = await product.save();
    res.status(200).json({
      status: "succes",
      data,
    });
  } catch (error) {
    if (req.file) {
      const filePath = req.file.path;
      fs.unlinkSync(filePath);
    }

    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const getProductsCat = async (req, res) => {
  try {
    let param = req.params;
    const data = await Product.find({ categoria: param.cat }).lean();
    res.status(200).json({
      status: "succes",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error en mostrar productos por categoria",
      error: error.message,
    });
  }
};

export const deleteProductById = async (req, res) => {

//ME FALTA BORRAR EL ARCHIVO DE IMAGEN 

  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new Error("Id de artista no valido");
    let result = await Product.findByIdAndDelete(id);
    if (result == null) throw new Error("No se encontro producto con ese Id");
    res.status(200).json({
      status: "succes",
      message: "Producto eliminado ",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error en borrar producto por su Id",
      error: error.message,
    });
  }
};
