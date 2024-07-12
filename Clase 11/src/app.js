import express from "express";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import viewsRouter from "./routers/viewsRouter.js";
const app = express();
const PORT = 8080;
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));
app.use("/", viewsRouter);
app.listen(PORT, () => {
  console.log("Servidor corriendo en: http://localhost:" + PORT);
});
