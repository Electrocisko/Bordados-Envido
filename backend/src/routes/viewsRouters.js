import express from "express";
import checkCookie from "../middlewares/checkToken.js";
import {indexController, loginController, modifiedController, formController, adminController} from "../controllers/viewsControllers.js";


const router = express.Router();


router.get("/", indexController);

router.get("/login", loginController );

router.get("/form", checkCookie, formController);

router.get("/modificar/:id", checkCookie,modifiedController );

router.get("/admin", checkCookie,adminController );

export default router;
