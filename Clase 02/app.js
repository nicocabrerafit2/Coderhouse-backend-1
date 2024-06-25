import fs from "fs";
//Se lee el contenido del archivo “dataBase.json”. El contenido se interpreta como una cadena y se convierte a un objeto JavaScript utilizando JSON.parse().
const dataBase = JSON.parse(fs.readFileSync("./dataBase.json", "utf-8"));
//Se calcula el nuevo ID para un producto sumando 1 al tamaño actual de la base de datos
const newId = dataBase.length + 1;

class ProductManager {
  //Busca un producto en la base de datos por su ID.
  getProductById(id) {
    if (dataBase.length) {
      const resultFind = dataBase.find((item) => item.id === id);
      resultFind ? resultFind : "El producto no se encontró";
    } else {
      const error = console.log("El producto no se encontró");
      return error;
    }
  }
  //Imprime en la consola todos los productos de la base de datos.
  getProducts() {
    return console.log(dataBase);
  }
  //
  addProducts(product) {
    //Verifica si ya hay algun producto cargado
    if (dataBase.length) {
      //Verifica si ya existe un producto con el mismo código (product.code)
      const resultFind = dataBase.find((item) => item.code === product.code);
      //Si no existe, agrega el producto con un nuevo ID y actualiza el archivo “dataBase.json”
      if (!resultFind) {
        const productWithId = { ...product, id: newId };
        dataBase.push(productWithId);
        fs.writeFileSync(
          "./dataBase.json",
          JSON.stringify(dataBase, null, " "),
          "utf-8"
        );
        return console.log("Se agrego el producto a la base de datos");
      } else {
        //Si ya existe, muestra un mensaje indicando que el producto no se agregó
        return console.log(
          "El roducto no se agregó, ya se encuentra en la base de datos"
        );
      }
    } else {
      //Si esta vacio el dataBase, agrega el producto con un ID y actualiza el archivo “dataBase.json”
      const productWithId = { ...product, id: 1 };
      dataBase.push(productWithId);

      fs.writeFileSync(
        "./dataBase.json",
        JSON.stringify(dataBase, null, " "),
        "utf-8"
      );
      return console.log("Se agrego el producto a la base de datos");
    }
  }
}
//Se crea una instancia de ProductManager y se llama al método addProducts() con un objeto de producto de prueba.
//PRUEBA PARA AGREGAR PRODUCTOS:
/*const manager = new ProductManager();
manager.addProducts({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "sgsddsdsd",
  stock: 25,
  id: 4,
});
*/
