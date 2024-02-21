import expres from "express";
import dotenvConfig from "../config/dotenvConfig.js";
import { createToken } from "../helpers/jwt.js";

const router = expres.Router();

router.post("/login", (req, res) => {
  try {
    let { nombre, pass } = req.body;
    const ADMIN = dotenvConfig.session.ADMIN;
    const PASS = dotenvConfig.session.PASS;
    const SECRET = dotenvConfig.session.SECRET_JWT;
    if (nombre == ADMIN && pass == PASS) {
      const token = createToken("Admin", SECRET);
      res.status(200).json({
        status: "succes",
        message: "ok",
        token,
      });
    } else {
        throw new Error("Credenciales No Validos")
    }
  } catch (error) {
    res.status(400).json({
      status: "error",
      error: error.message,
    });
  }
});

export default router;
