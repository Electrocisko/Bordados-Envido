import {Product} from '../models/productModel.js';
import fs from 'fs';

 export const getProducts = async (req,res) => {
    try {
        const  data = await Product.find().lean();
        res.status(200).json({
            status: "success",
            data
          });

    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Error en obtener productos"
        })
    }
}

export const createProduct = async (req,res) => {
    try {
        let newProduct = req.body;
        newProduct.image = req.file.filename;
        //Faltan validaciones!! de los datos que llegan
        const imageSplit = req.file.filename.split(".");
        const extension = imageSplit[1];
        if (extension != "png" && extension != "jpg" && extension != "webp") {
            throw new Error("Archivo adjunto no valido.");
        }

        if(req.file.size > 300000) throw new Error("Ups muy pesado");
        
        let product = new Product(newProduct);
        let data = await product.save();
        res.status(200).json({
          status: "succes",
          data,
        });
    } catch (error) {
        const filePath = req.file.path;
        fs.unlinkSync(filePath);
        res.status(500).json({
            status: "error",
            message: "Error en crear producto",
            error: error.message
        })
    }






}