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
});

app.get("/", (req, res) => {
  res.render("saludo", {});
});
