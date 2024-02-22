import jwt from "jwt-simple";
import dotenvConfig from "../config/dotenvConfig.js";
import moment from "moment";

const secret = dotenvConfig.session.SECRET_JWT;

export const createToken = (admin) => {
    const payload = {
        nombre: "Admin",
        iat: moment().unix(),
        exp: moment().add(1,"days").unix()
    }
    return jwt.encode(payload, secret);
}

export const decodeToken = (token) => {
    const payload = jwt.decode(token, secret);
    if (payload.exp < moment().unix() ) return null;
    return payload;
}


