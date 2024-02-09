import express from "express";
import upLoader from "../helpers/imageLoader.js";

const router = express.Router();


router.get('/', (req,res) => {
    res.json({
        status:"success",
        message:"Aca se muestran todos los productos"
    })
})

router.post('/ingresar',upLoader.single('file') ,(req,res) => {
    console.log(req.file);
res.json({
    status:"succes",
    message:"Aca se ingresa los datos a Api"
})
})


export default router;