import express, { urlencoded } from "express";
const app = express();
const PORT = 8080;
app.listen(PORT, () => {
  console.log("Servidos corriendo en: http://localhost:" + PORT);
});
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hola mundo",
  });
});
app.post("/", (req, res) => {
  const infoRecivida = req.body;

  return res.status(200).json({
    ...infoRecivida,
    message: "Todo ok, info recibida y copiada",
  });
});
app.put("/", (req, res) => {
  const newInfo = req.body;

  return res.status(200).json({
    ...newInfo,
    message: "Se modifico parcialmente el elemento",
  });
});
app.delete("/:id", (req, res) => {
  //const id = req.params;
  //se busca el elemento a borrar ayudados del id, y se realiza la logica de borrado
  return res.status(200).json({
    message: "Se elimino el objeto",
  });
});
