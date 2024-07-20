import express from "express";
import productsRoutes from "./routes/productsRoutes.js";
import cartsRoutes from "./routes/cartsRoutes.js";
import mainRoutes from "./routes/mainRoutes.js";
import realtimeproducts from "./routes/realtimeproductsRoutes.js";

import handlebars from "express-handlebars";
import { Server } from "socket.io";
import __dirname from "./utils.js";

const app = express();
const PORT = 8080;

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", mainRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/carts", cartsRoutes);
app.use("/realtimeproducts", realtimeproducts);

const runServer = app.listen(
  PORT,
  console.log("Servidor corriendo en:http://localhost:" + PORT)
);

const websocketServer = new Server(runServer);
websocketServer.on("connection", (socket) => {
  console.log("Nuevo dispositivo conectado");
  console.log({
    id: socket.id,
    "Números de clientes conectados": websocketServer.engine.clientsCount,
  });
  socket.on("addProduct", (data) => {
    console.log("Se agrego un producto nuevo se debe enviar un emit");
  });
  socket.emit({ productsRoutes });
  socket.on("mensaje2", (data) => {
    console.log("esto viene desde el cliente: " + data);
  });
  websocketServer.emit(
    "respuestaATodosLosConectados",
    "Soy el servidor: hola a todos"
  );
});
