import {Product} from '../models/productModel.js'


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
        // modelo, categoria, descripcion, precio, file;

        if(req.file.size > 300000) throw new Error("Ups muy pesado");
        

        let product = new Product(newProduct);
        let data = await product.save();
        res.status(200).json({
          status: "succes",
          data,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Error en crear producto",
            error: error.message
        })
    }






}