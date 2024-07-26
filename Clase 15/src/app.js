import  express from "express";
import {router} from "./routes/main.routes.js"
import mongoose from "mongoose"
const app = express()
const PORT = 8080




app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/cursosInMongoose",router)

app.listen(PORT,()=>{
    console.log("Server on http://localhost:"+PORT);
})

mongoose.connect("mongodb+srv://nicocabrera8:Y0BrFdDBQ23amtUR@backendcoderhouse1.nvbxjk0.mongodb.net/?retryWrites=true&w=majority&appName=BackendCoderhouse1",{
    dbName: "curso"
}) .then(() => {
    console.log("Conexion con mongoose ok");
  });