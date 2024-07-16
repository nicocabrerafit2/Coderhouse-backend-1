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
  const { title, description, code, price, stock, category } = req.body;
  const body = req.body;
  //Valida que el req.body venga completo con todos los campos obligatorios y luego valida que sean del tipo de dato correspondiente
  if (title && description && code && price && stock && category) {
    if (typeof title !== "string") {
      return res.send("El campo title debe ser un texto (string)");
    }
    if (typeof description !== "string") {
      return res.send("El campo description debe ser un texto (string)");
    }
    if (typeof code !== "string") {
      return res.send("El campo code debe ser un texto (string)");
    }
    if (typeof price !== "number") {
      return res.send("El campo price debe ser un número (Number)");
    }
    if (typeof stock !== "number") {
      return res.send("El campo stock debe ser un número (Number)");
    }
    if (typeof category !== "string") {
      return res.send("El campo category debe ser un texto (string)");
    }
    if (req.body.thumbnails) {
      if (!Array.isArray(req.body.thumbnails)) {
        return res.send(
          "El campo thumbnails debe ser un arreglo de strings (array)"
        );
      }
    }
  } else {
    return res.send(
      "Es requisito que complete todos los campos (el campo thumbnails si puede quedar vacio)"
    );
  }
  await newProductManager.addProduct(body);
  res.send("Se agregó correctamente el producto.");
});
router.put("/:productId", async (req, res) => {
  const productId = req.params.id;
  await newProductManager.modifyProduct(productId);
  res.send("Se modificó correctamente el producto.");
});
//Borrado permanente del producto
router.delete("/:id", async (req, res) => {
  await newProductManager.deleteProduct;
});

export default router;
