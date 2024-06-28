import { Router } from "express";
const router = Router();

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
