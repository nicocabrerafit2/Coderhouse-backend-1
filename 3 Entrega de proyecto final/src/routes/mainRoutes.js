import { Router } from "express";
import { ProductManager } from "../Class/productManager.js";

const newProductManager = new ProductManager();
const router = Router();

router.get("/", (req, res) => {
  res.render("main");
});
router.get("/productNoWebsocket", async (req, res) => {
  const limit = req.query.limit;
  const products = await newProductManager.getProducts(limit);
  res.render("home", { products });
});

export default router;
