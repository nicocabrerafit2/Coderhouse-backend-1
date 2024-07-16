import fs from "fs";

class ProductManager {
  constructor(path) {
    this.path = path;
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
    const productsInDataBase = await this.showDataBase();
    const newId = () => {
      if (productsInDataBase.length) {
        const lastProduct = productsInDataBase[productsInDataBase.length - 1];
        const lastId = lastProduct.id;
        return lastId + 1;
      } else {
        return 1;
      }
    };
    const newProductWithId = { ...body, status: true, id: newId() };
    productsInDataBase.push(newProductWithId);
    const updatedDatabase = JSON.stringify(productsInDataBase, null, " ");
    await fs.promises.writeFile(this.path, updatedDatabase);
  }

  async modifyProduct(productId) {
    const productsInDataBase = JSON.parse(
      await fs.promises.readFile(this.path, "utf-8")
    );
    //Verifica que exista el producto con ese id en la base de datos
    const result = productsInDataBase.find((item) => item.id == req.params.id);

    if (result) {
      //Agregar validaciones del req.body
      const title = req.body.title;
      const description = req.body.description;
      const code = req.body.code;
      const price = req.body.price;
      const stock = req.body.stock;
      const category = req.body.category;
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
        //Guardo el las modificaciones del producto
        result.title = req.body.title;
        result.description = req.body.description;
        result.code = req.body.code;
        result.price = req.body.price;
        if (req.body.status === false) {
          result.status = false;
        }
        result.stock = req.body.stock;
        result.category = req.body.category;
        if (req.body.thumbnails) {
          result.thumbnails = req.body.thumbnails;
        }

        //Paso el nuevo dataBase a formato JSON para poder hacer la persistencia de los datos
        const updatedDatabase = JSON.stringify(productsInDataBase, null, " ");
        //Realizo la persistencia de la base de datos actualizada
        await fs.promises.writeFile(this.path, updatedDatabase);
        //fs.writeFileSync(this.path, updatedDatabase);//Metodo sincrónico

        return res.send(
          "Se mofifico el producto con id: " + req.params.id + " correctamente"
        );
      }
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
