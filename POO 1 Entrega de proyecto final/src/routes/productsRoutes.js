import { Router } from "express";
import { ProductManager } from "../Class/productManager.js";
import { __dirname } from "../utils.js";
const router = Router();
const path = __dirname + "/data/productos.json";

const newProductManager = new ProductManager(path);

router.get("/", async (req, res) => {
  const limit = req.query.limit;
  const products = await newProductManager.getProducts(limit);
  res.json(products);
});
router.get("/:productId", async (req, res) => {
  const productId = req.params.productId;
  const productFinded = await newProductManager.getProductById(productId);
  res.json(productFinded);
});
router.post("/", async (req, res) => {
  const body = req.body;
  await newProductManager.addProduct(body);
  res.send("Se agregó correctamente el producto.");
});

router.put("/:productId", async (req, res) => {
  const body = req.body;
  const productId = req.params.productId;

  await newProductManager.modifyProduct(productId, body);
  res.send("Se modificó correctamente el producto.");
});
//Borrado permanente del producto
router.delete("/:id", async (req, res) => {
  await newProductManager.deleteProduct;
});

export default router;
