import { User } from "../models/userModel.js";
import { createHash } from "../helpers/cryptPassword.js";
import mongoose from "mongoose";
import dayjs from "dayjs";
import { dtoUser } from "../dto/dtoUser.js";



const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find().lean();
    res.status(200).json({
      status: "success",
      allUsers,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new Error("Id de usuario no valido");
    let user = await User.findById(id).lean();
    if (!user) throw new Error("Usuario no encontrado ");

    let dataUser = dtoUser(user);

    res.status(200).json({
      status: "success",
      message: "Get User By Id",
      user: dataUser,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      telefono,
      password,
      checkpassword,
      email,
      direccion,
    } = req.body;
    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (password != checkpassword) throw new Error("Password no coinciden");
    if (!nombre || nombre.trim().length == 0)
      throw new Error("Falta completar campo Nombre");
    if (!apellido) throw new Error("Falta completar campo Apellido ");
    if (!telefono) throw new Error("Falta completar campo Telefono");
    if (!password) throw new Error("Falta completar campo Password");
    if (!email) throw new Error("Falta completar campo Correo Electronico");
    if (!direccion) throw new Error("Falta completar campo Dirección");
    if (!emailRegex.test(email))
      throw new Error("Correo electronico no valido");

    let user = new User(req.body);
    let hashedPassword = await createHash(password);
    user.password = hashedPassword;
    user.iat = dayjs().format("DD/MM/YYYY, HH:mm");
    await user.save();

    res.status(201).json({
      status: "success",
      message: "User Created",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new Error("Id de usuario no valido");
    let newData = req.body;
    let user = await User.findByIdAndUpdate(id, newData, { new: true });
    res.status(201).json({
      status: "success",
      message: "Usuario Actualizado",
      id,
      user,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export { getUsers, createUser, getUserById, updateUser };
