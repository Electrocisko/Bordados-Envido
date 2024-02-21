import expres from 'express';
import dotenvConfig from '../config/dotenvConfig.js';
import { createToken } from '../helpers/jwt.js';

const router = expres.Router();

router.post('/login', (req, res) => {

// Try Catch



    let {nombre, pass} = req.body;
    const ADMIN = dotenvConfig.session.ADMIN;
    const PASS = dotenvConfig.session.PASS;
    const SECRET = dotenvConfig.session.SECRET_JWT
    if (nombre == ADMIN && pass == PASS) {

    const token = createToken("Admin",SECRET);   
   res.status(200).json({
    status: "succes",
    message: "ok",
    token
   })
    } else {
        res.status(200).json({
            status: "error",
            message: "Usuario o Password Invalido"
           })
    }
})

export default router;