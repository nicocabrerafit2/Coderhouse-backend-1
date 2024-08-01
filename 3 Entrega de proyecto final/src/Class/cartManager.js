class CartManager {
  constructor(cartDb) {
    this.cartDb = cartDb;
  }
  async showDataBase() {
    const cartInDataBase = await this.cartDb.find();
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
    await this.cartDb.create({ products: [] });
    return { messaje: "Se agregó correctamente el nuevo carrito." };
  }
  async getCartById(cartId) {
    try {
      const cartFinded = await this.cartDb.findById({ id: cartId });
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
    try {
    } catch {}

    const cartsInDatabase = await this.showDataBase();
    const cartFinded = cartsInDatabase.find((item) => item.id == params.idcart);
    if (cartFinded) {
      const productExistInCart = cartFinded.products.find(
        (item) => item.product == params.idproduct
      );
      if (productExistInCart) {
        await this.cartDb.update(
          { id: params.idcart, product: params.idproduct },
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
          product: parseInt(params.idproduct),
          quantity: 1,
        };
        await this.cartDb.update(
          { id: params.idcart },
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
      }
    } else {
      return { messaje: "Ese carrito no se encuentra en la base de datos" };
    }
  }
}
export { CartManager };
