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

router.get("/form", (req, res) => {
  res.render("form.ejs");
});


router.get("/admin", checkCookie, async (req, res) => {
  try {
    let token = req.cookies.jwt;
    const data = await Product.find().lean();
    res.render("products.ejs", { data: data, token: token});
  } catch (error) {
    console.log(error);
  }
});

export default router;
