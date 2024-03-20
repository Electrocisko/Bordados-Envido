import mongoose  from "mongoose";
const {Schema, model} = mongoose;


const userSchema = new Schema({
    nombre: String,
    apellido: String,
    imagen: String,
    telefono: String,
    password:String,
    email: String,
    direccion: String,
    admin: {type: Boolean, default: false},
    iat: String,
})


export  const User = model("user", userSchema);