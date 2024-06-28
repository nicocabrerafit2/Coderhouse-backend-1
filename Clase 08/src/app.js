import express, { urlencoded } from "express";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";
import __dirname from "./utils.js";

const app = express();
const PORT = 8080;
app.listen(PORT, () => {
  console.log("Servidos corriendo en: http://localhost:" + PORT + "/api/user");
});
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use("/api/products", productRouter);
app.use("/api/user", userRouter);
app.use(express.static(__dirname + "/public"));
console.log(__dirname);
