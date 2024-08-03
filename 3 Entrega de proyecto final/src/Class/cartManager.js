import { cartDb } from "../models/carts.model.js";
class CartManager {
  constructor() {
  }
  async showDataBase() {
    const cartInDataBase = await cartDb.find().lean();
    return cartInDataBase;
  }

  async cartsInDatabase(limit) {
    const cartsInDatabase = await this.showDataBase();
    const limitData = cartsInDatabase.slice(0, limit);
    if (limitData.length) {
      return limitData;
    } else
      return {
        messaje:
          "Se realizo la busqueda y no se encontró ningun carrito en la base de datos",
      };
  }
  async addCart() {
    await cartDb.create({ products: [] });
    return { messaje: "Se agregó correctamente el nuevo carrito." };
  }
  async getCartById(cartId) {
    try {
      const cartFinded = await cartDb.findById(cartId);
      if (cartFinded.products.length) {
        return cartFinded.products;
      }
      return {
        message:
          "Este carrito aun no tiene productos cargados dentro del mismo",
      };
    } catch {
      return {
        message:
          "El carrito con el id:" + cartId + " no existe en la base de datos",
      };
    }
  }
  async addProductInCart(params) {

    const cartsInDatabase = await this.showDataBase();
    const cartFinded = cartsInDatabase.find((item) => item._id == params.idcart);
    if (cartFinded) {
      const productExistInCart = cartFinded.products.find(
        (item) => item.product == params.idproduct
      );
      if (productExistInCart) {
        await cartDb.updateOne(
          { _id: params.idcart, product: params.idproduct },
          {
            $set: {
              quantity: quantity++,
            },
          }
        );
        return {
          messaje:
            "Se agregó una unidad mas del producto con id:" +
            params.idproduct +
            " al carrito con id:" +
            params.idcart,
        };
      } else {
        const productInCart = {
          product: params.idproduct,
          quantity: 1,
        };
try {
  await cartDb.updateOne(
    { _id: params.idcart },
    {
      $set: {
        product: productInCart,
      },
    }
  );
  return {
    messaje:
      "Se agregó el producto con id:" +
      params.idproduct +
      " al carrito con id:" +
      params.idcart,
  };
} catch {
  return { messaje: "Problemas al agregar el producto en el carrito" };
}
     
      }
    } else {
      return { messaje: "Ese carrito no se encuentra en la base de datos" };
    }
  }
}
export { CartManager };
