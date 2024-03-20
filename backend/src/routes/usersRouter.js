import express from "express";
const router = express.Router();
import {getUsers, createUser,getUserById, updateUser} from "../controllers/usersControllers.js";
import auth from "../middlewares/auth.js";


router.get("/", auth, getUsers);
router.get("/:id",auth, getUserById);

router.post("/", auth, createUser);
router.patch("/:id",auth, updateUser);

export default router;