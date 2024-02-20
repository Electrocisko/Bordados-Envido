import expres from 'express';
import dotenvConfig from '../config/dotenvConfig.js';

const router = expres.Router();

router.post('/login', (req, res) => {
    let {nombre, pass} = req.body;
    const ADMIN = dotenvConfig.session.ADMIN;
    const PASS = dotenvConfig.session.PASS;
    if (nombre == ADMIN && pass == PASS) {
   res.status(200).json({
    status: "succes",
    message: "ok"
   })
    } else {
        res.status(200).json({
            status: "error",
            message: "Usuario o Password Invalido"
           })
    }
})

export default router;