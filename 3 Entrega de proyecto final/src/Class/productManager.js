import { productDb } from "../models/products.model.js";

class ProductManager {
  constructor() {}
  async showDataBase() {
    try {
      const productsInDataBase = await productDb.find();
      return productsInDataBase;
    } catch {
      return {
        messaje: "No se pudo accesder a la base de datos",
      };
    }
  }
  async getProducts(limit) {
    const productsInDataBase = await this.showDataBase();
    const productsToShow = productsInDataBase.slice(0, limit);
    if (productsToShow.length) {
      return productsToShow;
    } else
      return {
        messaje:
          "Se realizo la busqueda y no se encontró ningun producto en la base de datos",
      };
  }
  async getProductById(productId) {
    try {
      const productFinded = await productDb.findById(productId);
      return productFinded;
    } catch {
      return {
        messaje:
          "El producto con el id:" +
          productId +
          " no se encuentra en la base de datos",
      };
    }
  }
  async addProduct(body) {
    const { title, description, code, price, stock, category } = body;
    if (title && description && code && price && stock && category) {
      if (typeof title !== "string") {
        return { messaje: "El campo title debe ser un texto (string)" };
      }
      if (typeof description !== "string") {
        return { messaje: "El campo description debe ser un texto (string)" };
      }
      if (typeof code !== "string") {
        return { messaje: "El campo code debe ser un texto (string)" };
      }
      if (typeof price !== "number") {
        return { messaje: "El campo price debe ser un número (Number)" };
      }
      if (typeof stock !== "number") {
        return { messaje: "El campo stock debe ser un número (Number)" };
      }
      if (typeof category !== "string") {
        return { messaje: "El campo category debe ser un texto (string)" };
      }
      if (body.thumbnails) {
        if (!Array.isArray(body.thumbnails)) {
          return {
            messaje:
              "El campo thumbnails debe ser un arreglo de strings (array)",
          };
        }
      }
      const newProductWithId = {
        ...body,
        status: true,
      };
      await productDb.create(newProductWithId);
      return {
        messaje: "Se agregó correctamente el producto.",
      };
    } else {
      return {
        messaje: "Es requisito que complete todos los campos",
      };
    }
  }
  async modifyProduct(productId, body) {
    const productsInDataBase = await this.showDataBase();
    const result = productsInDataBase.find((item) => item.id == productId);
    if (result) {
      const { title, description, code, price, stock, category } = body;
      if (title && description && code && price && stock && category) {
        if (typeof title !== "string") {
          return { messaje: "El campo title debe ser un texto (string)" };
        }
        if (typeof description !== "string") {
          return { messaje: "El campo description debe ser un texto (string)" };
        }
        if (typeof code !== "string") {
          return { messaje: "El campo code debe ser un texto (string)" };
        }
        if (typeof price !== "number") {
          return { messaje: "El campo price debe ser un número (Number)" };
        }
        if (typeof stock !== "number") {
          return { messaje: "El campo stock debe ser un número (Number)" };
        }
        if (typeof category !== "string") {
          return { messaje: "El campo category debe ser un texto (string)" };
        }
        if (body.thumbnails) {
          if (!Array.isArray(body.thumbnails)) {
            return {
              messaje:
                "El campo thumbnails debe ser un arreglo de strings (array)",
            };
          }
        }
        if (body.status === false) {
          result.status = false;
        }
        if (body.thumbnails) {
          result.thumbnails = body.thumbnails;
        }
        try {
          await productDb.update(
            { id: productId },
            {
              $set: {
                title: title,
                description: description,
                code: code,
                price: price,
                stock: stock,
                category: category,
                status: result.status,
                thumbnails: result.thumbnails,
              },
            }
          );
          return {
            messaje: "Se modificó correctamente el producto.",
          };
        } catch {
          return {
            messaje:
              "Es requisito que complete todos los campos (el campo thumbnails si puede quedar vacio)",
          };
        }
      }
    }
  }
  async deleteProduct(productId) {
    try {
      await productDb.deleteOne({ id: productId });
      return { messaje: "Se borro el producto con éxito" };
    } catch (error) {
      return {
        messaje:
          "El producto con el id: " +
          productId +
          " no se encuentra en la base de datos",
      };
    }
  }
}

export { ProductManager };
