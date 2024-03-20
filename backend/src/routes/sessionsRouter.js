import expres from "express";
import {loginController, logoutController} from "../controllers/sessionsControllers.js"

const router = expres.Router();

router.post("/login", loginController);

router.get("/logout",logoutController);

export default router;
