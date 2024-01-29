import { response, request } from "express";
import user from "../model/user.js";
import bcrypt from "bcryptjs";
import { helpers } from "../helpers/index.js";

export const userRegister = async (req = response, res = request) => {
  // destructurar el req.body
  // buscar el usuario dentro de mongo DB

  // crear un objeto con el usuario

  // encriptar la contrasena
  // guardar el usuario

  // generar JWT

  try {
    const { name, email, password } = req.body;

    let userVal = await user.findOne({ email });

    if (userVal) {
      return res.status(400).json({
        ok: false,
        msg: "A user exist with this email",
      });
    }

    userVal = new user(req.body);

    const salt = bcrypt.genSaltSync(10);
    userVal.password = bcrypt.hashSync(password, salt);
    
    await userVal.save();
    const token = await helpers.generalJWT(userVal.id, userVal.name);

    return res.status(201).json({
      ok: true,
      name: userVal.name,
      uid: userVal.id,
      msg: "Usuario creado exitosamente",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please, You speak with the admin",
    });
  }
};


export const userLogin = async ( req = response, res=request ) => {
    
  
  try {
    const { name, email, password } = req.body;

    let userVal = await user.findOne({ email });

    if (!userVal) {
      return res.status(400).json({
        ok: false,
        msg: "This user don't exists",
      });
    }

    // confirmar password
    const validPassword = bcrypt.compareSync(password, userVal.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "password incorrect",
      });
    }

    const token = await helpers.generalJWT(userVal.id, userVal.name);
    return res.status(201).json({
      ok: true,
      name: userVal.name,
      uid: userVal.id,
      msg: "Login exist!!",
      token})
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please, You speak with the admin",
    });
  }
    

}