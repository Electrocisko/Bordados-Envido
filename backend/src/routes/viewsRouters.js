import express from "express";
import { Product } from "../models/productModel.js";
import checkCookie from "../middlewares/checkToken.js";


const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.get("/login", (req, res) => {
  res.render("login.ejs");
});

router.get("/form", checkCookie, (req, res) => {
  let token = req.cookies.jwt;
  res.render("form.ejs", { token: token });
});

router.get("/modificar/:id", checkCookie, async (req, res) => {
  try {
    let id = req.params.id;
    let product = await Product.findById(id).lean();
    let token = req.cookies.jwt; 
    res.render("updatedForm.ejs", { id: id, product: product, token: token });
  } catch (error) {
    res.status(400).json({
      status:"error",
      message: error.message
    })
  }
});

router.get("/admin", checkCookie, async (req, res) => {
  try {
    let token = req.cookies.jwt;
    const data = await Product.find().lean();
    res.render("products.ejs", { data: data, token: token });
  } catch (error) {
    res.status(400).json({
      status:"error",
      message: error.message
    })
  }
});

export default router;
