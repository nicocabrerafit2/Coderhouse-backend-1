import fs from "fs";

const dataBase = JSON.parse(fs.readFileSync("./dataBase.json", "utf-8"));

console.log("Leyendo desde fs.writeFileSync:", dataBase);

class ProductManager {
  constructor() {
    this.idAcum = 1;
  }
  getProductById(id) {
    const resultFind = dataBase.find((item) => item.id === id);

    resultFind
      ? console.log(resultFind)
      : console.log("El producto no se encuentra en la base de datos");
  }
  getProducts() {
    return dataBase;
  }
  addProducts(product) {
    if (dataBase.length) {
      const resultFind = dataBase.find((item) => item.code === product.code);
      if (!resultFind) {
        const productWithId = { ...product, id: this.idAcum++ };
        dataBase.push(productWithId);

        return console.log("Se agrego el producto a la base de datos");
      } else {
        return console.log("Este producto ya se encuentra en la base de datos");
      }
    } else {
      const productWithId = { ...product, id: this.idAcum++ };
      dataBase.push(productWithId);

      return console.log("Se agrego el producto a la base de datos");
    }
  }
}

const manager = new ProductManager();
manager.addProducts({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});
manager.addProducts({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});
manager.addProducts({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "fff123",
  stock: 25,
});
manager.addProducts({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "fffddd123",
  stock: 25,
});
manager.addProducts({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "ffaaaaf123",
  stock: 25,
});
manager.getProductById(34);
