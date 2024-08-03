import { Router } from "express";
import { CartManager } from "../Class/cartManager.js";
import { cartDb } from "../models/carts.model.js";
const router = Router();
const newCartManager = new CartManager();
router.get("/", async (req, res) => {
  const limit = req.query.limit;
  const cartsInDatabase = await newCartManager.cartsInDatabase(limit);
  res.json(cartsInDatabase);
});
router.post("/", async (req, res) => {
  const addCart = await newCartManager.addCart();
  res.json(addCart);
});
router.get("/:id", async (req, res) => {
  const cartId = req.params.id;
  const getCartById = await newCartManager.getCartById(cartId);
  res.json(getCartById);
});
router.post("/:idcart/:idproduct", async (req, res) => {
  const params = req.params;
  const addProductInCart = await newCartManager.addProductInCart(params);
  res.json(addProductInCart);
});

export default router;
