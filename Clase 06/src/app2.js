import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Servidor creado con express");
});
app.get("/:cualquierURL", (req, res) => {
  res.status(404).send("No se encuentra esa url");
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(
    "Servidor creado con express corriendo en http://localhost:" + PORT
  );
});
