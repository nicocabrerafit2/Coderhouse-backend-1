import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import { Server } from "socket.io";
const app = express();
const PORT = 8080;

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

const runServer = app.listen(PORT, () => {
  console.log("Servidor corriendo en: http://localhost:" + PORT);
});

const websocketServer = new Server(runServer);

websocketServer.on("connection", (socket) => {
  console.log("Nuevo dispositivo conectado");
  console.log({
    id: socket.id,
    "Números de clientes conectados": websocketServer.engine.clientsCount,
  });
  socket.on("mensaje", (data) => {
    console.log("esto viene desde el cliente: " + data);
  });
  socket.emit("respuesta", "Soy el servidor: me llego todo ok");
  socket.on("mensaje2", (data) => {
    console.log("esto viene desde el cliente: " + data);
  });
  websocketServer.emit(
    "respuestaATodosLosConectados",
    "Soy el servidor: hola a todos"
  );
});

app.get("/", (req, res) => {
  res.render("saludo", {});
});
