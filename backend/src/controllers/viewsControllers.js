import { Product } from "../models/productModel.js";

const indexController = (req, res) => {
    let userLoged = false;
      if (req.cookies.jwt) {
    userLoged = true;
      }
      res.render("index.ejs", {userLoged: userLoged});
    }

const loginController = (req, res) => {
    res.render("login.ejs");
  }

const formController = (req, res) => {
    let token = req.cookies.jwt;
    res.render("form.ejs", { token: token });
  }

  const modifiedController = async (req, res) => {
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
  }

const adminController = async (req, res) => {
    try {
      let token = req.cookies.jwt;
      //Traigo los productos y los ordeno del mas nuevo al mas viejo
      const data = await Product.find().sort({nostock: 1, iat: -1}).lean()
      res.render("products.ejs", { data: data, token: token });
    } catch (error) {
      res.status(400).json({
        status:"error",
        message: error.message
      })
    }
  }


export {
    indexController,
    loginController,
    formController,
    modifiedController, 
    adminController
}