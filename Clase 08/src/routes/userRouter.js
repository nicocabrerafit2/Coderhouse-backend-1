import { Router } from "express";
const router = Router();
//aplico un middleware de ruta solo para practica
router.use((req, res, next) => {
  req.timestamp = new Date();
  next();
});
//aplico un middleware de endpoint solo para practica
router.get("/prubeaMiddleware", (req, res, next) => {
  req.timestamp = new Date();
  next();
});
//-------------------MULTER inicio-----------------
router.post("/subirImagen", (req, res) => {
  return res.status(200).json({
    message: "Hola mundo",
  });
});
import uploader from "../../src/utils";
//-------------------MULTER fin-----------------

router.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hola mundo",
  });
});
router.post("/", (req, res) => {
  const infoRecivida = req.body;

  return res.status(200).json({
    ...infoRecivida,
    message: "Todo ok, info recibida y copiada",
  });
});
router.put("/", (req, res) => {
  const newInfo = req.body;

  return res.status(200).json({
    ...newInfo,
    message: "Se modifico parcialmente el elemento",
  });
});
router.delete("/:id", (req, res) => {
  //const id = req.params;
  //se busca el elemento a borrar ayudados del id, y se realiza la logica de borrado
  return res.status(200).json({
    message: "Se elimino el objeto",
  });
});
export default router;
