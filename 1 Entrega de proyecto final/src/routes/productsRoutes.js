import { Router } from "express";
import fs from "fs";
import __dirname from "../utils.js";
const dataBaseJson = JSON.parse(
  fs.readFileSync(__dirname + "/data/dataBase.json", "utf-8")
);

const router = Router();

router.get("/", (req, res) => {
  const limit = req.query.limit;
  //Envia un query para limitar los resultamos mostrados
  const limitData = dataBaseJson.slice(0, limit);
  //Verifica que existan productos cargados en la base de datos
  if (limitData.length) {
    return res.send(limitData);
  } else
    return res
      .status(200)
      .send(
        "Se realizo la busqueda y no se encontró ningun producto en la base de datos"
      );
});
router.get("/:id", (req, res) => {
  const result = dataBaseJson.filter((item) => item.id == req.params.id);
  //Verifica que exista el producto con ese id
  if (result.length) return res.send(result);
  else
    return res
      .status(404)
      .send(
        "El producto con el id:" +
          req.params.id +
          " no se encuentra en la base de datos"
      );
});
router.post("/", (req, res) => {
  const newProduct = req.body;
  const newDataBase = dataBaseJson.push(newProduct);
  console.log(newDataBase);
  //return res.send(newDataBase);
  // Revisar newDataBase porque me da un valor = a 9 cuando me tiene que dar un array.
});

export default router;
