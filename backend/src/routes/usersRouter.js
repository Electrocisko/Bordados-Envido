import express from "express";
const router = express.Router();
import {getUsers, createUser,getUserById, updateUser} from "../controllers/usersControllers.js";
import auth from "../middlewares/auth.js";


router.get("/", auth, getUsers); //privado
router.get("/:id",auth, getUserById);//privado

router.post("/", createUser);//publico
router.patch("/:id",auth, updateUser);//privado

export default router;