import express from "express";
import { Product } from "../models/productModel.js";


const router = express.Router();

router.get('/', (req,res) => {
    res.render("index.ejs");
})

router.get('/login', (req,res) => {
    res.render("login.ejs");
})

router.get('/form', (req,res) => {
    res.render("form.ejs")
})

router.get('/productos', async  (req,res) => {
    try {
        const data = await Product.find().lean();
        res.render("products.ejs", {data: data})
    } catch (error) {
        console.log(error);
    }

})

export default router;