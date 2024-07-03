import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
console.log(__dirname);
const app = express();
const PORT = 8080;
app.listen(PORT, () => {
  console.log("Servidor corriendo en: http://localhost:" + PORT);
});

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("saludo", {});
});
