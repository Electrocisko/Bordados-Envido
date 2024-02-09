import express from "express";

const router = express.Router();

router.get('/', (req,res) => {
    res.render("index.ejs");
})

router.get('/form', (req,res) => {
    res.render("form.ejs")
})

export default router;