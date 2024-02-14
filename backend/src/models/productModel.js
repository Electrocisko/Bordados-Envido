import mongoose  from "mongoose";
const {Schema, model} = mongoose;

const productSchema = new Schema({
    modelo: String,
    categoria: String,
    descripcion:String,
    precio: Number,
    image: String
})

export  const Product = model("product", productSchema);