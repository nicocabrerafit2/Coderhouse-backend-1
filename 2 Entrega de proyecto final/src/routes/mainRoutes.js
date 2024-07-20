import { Router } from "express";
import fs from "fs";
import __dirname from "../utils.js";
const URL = __dirname + "/data/productos.json";
const router = Router();

router.get("/", async (req, res) => {
  const productsInDataBase = JSON.parse(
    await fs.promises.readFile(URL, "utf-8")
  );
  const limit = req.query.limit;
  //Envia un query para limitar los resultamos mostrados
  const productsToShow = productsInDataBase.slice(0, limit);
  //Verifica que existan productos cargados en la base de datos

  res.render("home", { productsToShow });
});
export default router;
