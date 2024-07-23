import { Router } from "express";
import { userModel } from "../models/users.model.js";
const router = Router();
router.get("/", async (req, res) => {
  const usuarios = await userModel.find();
  res.json(usuarios);
});
router.post("/", async (req, res) => {
  const { nombre, apellido, email } = req.body; // me llega la info desde la peticion
  const result = await userModel.create({
    nombre,
    apellido,
    email,
  });

  res.status(201).json({ message: "usuario agregado ", payload: result });
});
export { router };
