import express from "express";
const app = express();

/*
Metodo app.get mal ubicado (se tiene que colocar al final de todos los app.get):
app.get("/:cualquierURL", (req, res) => {
  res.status(404).send("No se encuentra esa url");
});
*/
app.get("/user", (req, res) => {
  const { name, edad } = req.query;
  const baseDatos = [
    { name: "nico", edad: 18 },
    { name: "roberto", edad: 56 },
  ];
  //http://localhost:8080/user?name=roberto&edad=18
  if (!name) {
    res.send("No se introdujo el name en los query");
  } else {
    const userFinded = baseDatos.find((user) => user.name === name);
    if (!userFinded) {
      res.send("No se encontro ese nombre en la base de datos");
    }
    res.send(userFinded);
  }
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
