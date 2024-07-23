import express from "express";
import { router } from "./routes/mainRoutes.js";
import mongoose from "mongoose";
const app = express();
const PORT = 8080;

app.use("/", router);
app.listen(PORT, () => {
  console.log("servidor on en http://localhost:" + PORT);
});
mongoose
  .connect(
    "mongodb+srv://nicocabrera8:Y0BrFdDBQ23amtUR@backendcoderhouse1.nvbxjk0.mongodb.net/?retryWrites=true&w=majority&appName=BackendCoderhouse1",
    { dbName: "usuarios" }
  )
  .then(() => {
    console.log("mongoose todo ok");
  });
