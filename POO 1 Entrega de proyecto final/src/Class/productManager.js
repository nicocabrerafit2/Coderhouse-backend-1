import fs from "fs";

class ProductManager {
  constructor(path) {
    this.path = path;
  }
  async newId() {
    const productsInDataBase = await this.showDataBase();
    if (productsInDataBase.length) {
      const lastProduct = productsInDataBase[productsInDataBase.length - 1];
      const lastId = lastProduct.id;
      return lastId + 1;
    } else {
      return 1;
    }
  }
  async showDataBase() {
    const productsInDataBase = JSON.parse(
      await fs.promises.readFile(this.path, "utf-8")
    );
    return productsInDataBase;
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
    const productsInDataBase = await this.showDataBase();
    const productFinded = productsInDataBase.find(
      (item) => item.id == productId
    );
    if (productFinded) {
      return productFinded;
    } else {
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
      if (body.thumbnails) {
        if (!Array.isArray(body.thumbnails)) {
          return res.send(
            "El campo thumbnails debe ser un arreglo de strings (array)"
          );
        }
      }
      const newProductWithId = {
        ...body,
        status: true,
        id: await this.newId(),
      };
      const productsInDataBase = await this.showDataBase();
      productsInDataBase.push(newProductWithId);
      const updatedDatabase = JSON.stringify(productsInDataBase, null, " ");
      await fs.promises.writeFile(this.path, updatedDatabase);
    } else {
      return {
        messaje:
          "Es requisito que complete todos los campos (el campo thumbnails si puede quedar vacio)",
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
        result.title = body.title;
        result.description = body.description;
        result.code = body.code;
        result.price = body.price;
        if (body.status === false) {
          result.status = false;
        }
        result.stock = body.stock;
        result.category = body.category;
        if (body.thumbnails) {
          result.thumbnails = body.thumbnails;
        }
        const updatedDatabase = JSON.stringify(productsInDataBase, null, " ");
        await fs.promises.writeFile(this.path, updatedDatabase);
      }
    } else {
      return {
        messaje:
          "El producto con el id:" +
          req.params.id +
          " no se encuentra en la base de datos",
      };
    }
  }
  async deleteProduct() {
    const productsInDataBase = JSON.parse(
      await fs.promises.readFile(this.path, "utf-8")
    );
    //Verifica que exista el producto con ese id

    const indexProductoToDelete = productsInDataBase.findIndex(
      (item) => item.id == req.params.id
    );

    if (indexProductoToDelete > -1) {
      productsInDataBase.splice(indexProductoToDelete, 1);

      const updatedDatabase = JSON.stringify(productsInDataBase, null, " ");

      //fs.writeFileSync(this.path, updatedDatabase);//Metodo sincrónico
      await fs.promises.writeFile(this.path, updatedDatabase);

      return res.send("Se borro el producto con éxito");
    } else {
      return res
        .status(404)
        .send(
          "El producto con el id:" +
            req.params.id +
            " no se encuentra en la base de datos"
        );
    }
  }
}

export { ProductManager };
