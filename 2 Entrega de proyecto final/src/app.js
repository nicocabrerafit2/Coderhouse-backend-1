import express from "express";
import productsRoutes from "./routes/productsRoutes.js";
import cartsRoutes from "./routes/cartsRoutes.js";
import realtimeproducts from "./routes/realtimeproductsRoutes.js";
import productNoWebsocket from "./routes/productNoWebsocket.js";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import __dirname from "./utils.js";
import { ProductManager } from "../src/Class/productManager.js";
const path = __dirname + "/data/productos.json";
const app = express();
const PORT = 8080;

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productsRoutes);
app.use("/api/carts", cartsRoutes);
app.use("/realtimeproducts", realtimeproducts);
app.use("/productNoWebsocket", productNoWebsocket);

const runServer = app.listen(
  PORT,
  console.log("Servidor corriendo en:http://localhost:" + PORT)
);
const newProductManager = new ProductManager(path);


const websocketServer = new Server(runServer);

websocketServer.on("connection", async(socket) => {
  console.log({
    messaje:"Nuevo dispositivo conectado con id: "+socket.id,
    numConectados: websocketServer.engine.clientsCount,
  })
  const products = await newProductManager.showDataBase();
  websocketServer.emit("newProduct",products)

  socket.on("addProductFromView", async (productToAdd) => {
    const body = productToAdd
    const productAdd = await  newProductManager.addProduct(body);
    if(productAdd.messaje ==="Se agregó correctamente el producto."){
      websocketServer.emit("newProduct",products)
    }else{  websocketServer.emit("error",productAdd)}
  
  
  });
  socket.on("deleteProductFromView",async (productToDelete)=>{
    const productId = productToDelete
    const deleteProduct = await newProductManager.deleteProduct(productId);
    if(deleteProduct.messaje ==="Se borro el producto con éxito"){
      websocketServer.emit("newProduct",products)
    }else{ websocketServer.emit("error",deleteProduct)}
   
  })
 
});
