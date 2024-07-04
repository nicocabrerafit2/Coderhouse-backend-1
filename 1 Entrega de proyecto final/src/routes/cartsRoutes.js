import { Router } from "express";
import fs from "fs";
import __dirname from "../utils.js";
const router = Router();
const dataBaseCarts = JSON.parse(
  fs.readFileSync(__dirname + "/data/dataBaseCarts.json", "utf-8")
);

router.get("/", (req, res) => {
  const limit = req.query.limit;
  //Envia un query para limitar los resultamos mostrados
  const limitData = dataBaseCarts.slice(0, limit);
  //Verifica que existan productos cargados en la base de datos
  if (limitData.length) {
    return res.send(limitData);
  } else
    return res
      .status(200)
      .send(
        "Se realizo la busqueda y no se encontró ningun carrito en la base de datos"
      );
});
router.post("/", (req, res) => {
  //Agregar validaciones del req.body
  //Funcion que genera cada nuevo id
  const newId = () => {
    if (dataBaseCarts.length) {
      const lastProduct = dataBaseCarts[dataBaseCarts.length - 1];
      const lastId = lastProduct.id;
      return lastId + 1;
    } else return 1;
  };
  //Guardo el nuevo producto con su id en una nueva const y luego lo agrego al dataBase
  const newProductWithId = { products: [], id: newId() };
  dataBaseCarts.push(newProductWithId);
  //Paso el nuevo dataBase a formato JSON para poder hacer la persistencia de los datos
  const dataBaseCartsActuality = JSON.stringify(dataBaseCarts, null, " ");

  fs.writeFileSync(
    __dirname + "/data/dataBaseCarts.json",
    dataBaseCartsActuality
  );

  return res.send("Se agregó correctamente el nuevo carrito.");
});
router.get("/:id", (req, res) => {
  const result = dataBaseCarts.find((item) => item.id == req.params.id);
  //Verifica que exista el producto con ese id
  if (result) {
    if (result.products.length) {
      return res.send(result.products);
    }
    return res.send(
      "Este carrito aun no tiene productos cargados dentro del mismo"
    );
  } else {
    return res
      .status(404)
      .send(
        "El carrito con el id:" +
          req.params.id +
          " no existe en la base de datos"
      );
  }
});
router.post("/:cid/product/:pid", (req, res) => {
  //Verifica que exista el carrito con ese id
  const result = dataBaseCarts.find((item) => item.id == req.params.cid);

  if (result) {
    //Verifica si el producto ya esta cargado en el carrito previamente
    const productExistInCart = result.products.find(
      (item) => item.product == req.params.pid
    );
    if (productExistInCart) {
      productExistInCart.quantity++;
      const dataBaseCartsActuality = JSON.stringify(dataBaseCarts, null, " ");

      fs.writeFileSync(
        __dirname + "/data/dataBaseCarts.json",
        dataBaseCartsActuality
      );
      return res.send(
        "Se agregó una unidad mas del producto con id:" +
          req.params.pid +
          " al carrito con id:" +
          req.params.cid
      );
    } else {
      const productInCart = {
        product: parseInt(req.params.pid),
        quantity: 1,
      };
      result.products.push(productInCart);

      //Paso el nuevo dataBase a formato JSON para poder hacer la persistencia de los datos
      const dataBaseCartsActuality = JSON.stringify(dataBaseCarts, null, " ");

      fs.writeFileSync(
        __dirname + "/data/dataBaseCarts.json",
        dataBaseCartsActuality
      );
      return res.send(
        "Se agregó el producto con id:" +
          req.params.pid +
          " al carrito con id:" +
          req.params.cid
      );
    }
  } else {
    return res
      .status(404)
      .send(
        "Ese carrito no se encuentra en la base de datos, primero agrege un carrito"
      );
  }
});

export default router;
