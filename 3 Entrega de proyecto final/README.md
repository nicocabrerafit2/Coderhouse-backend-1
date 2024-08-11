Link al proyecto en github:

- https://github.com/nicocabrerafit2/Coderhouse-backend-1/tree/main/2%20Entrega%20de%20proyecto%20final

IMPORTANTE!!!!!

- Paso 1 Abrir terminal estando parados sobre el archivo app.js
- Paso 2 Instalar dependencias "npm i"
- Paso 3 Ejecutar el comando "npm start"
- Paso 4 Abrir el navegador e ingresar a http://localhost:8080

Esta tercera entrega se basa en las entregas anteriores.

Los endpoints para los productos son:

- GET http://localhost:8080/api/products Muestra los productos. Los query params soportados son:limit,page,sort(asc/desc),category(filtro por categoria)
- GET http://localhost:8080/api/products/:id Muestra solo un producto especifico
- POST http://localhost:8080/api/products Crea un producto (hay que enviar por body el JSON con la estructura correspondiente, mas abajo dejo un ejemplo)
- PUT http://localhost:8080/api/products/:id Modifica el producto especifico
- DELETE http://localhost:8080/api/products/:id Borra el productoe specifico



Los endpoints para los carritos son:

- GET http://localhost:8080/api/carts Muestra los carritos
- GET http://localhost:8080/api/carts/:id Muestra solo un carrito especifico
- POST http://localhost:8080/api/carts Crea un carrito vacío
- POST http://localhost:8080/api/carts/:idcart/:idproduct Agrega un producto especifico a un carrito especifico
- DELETE http://localhost:8080/api/carts/:idcart Borra por completo todos los productos de un carrito especifico
- DELETE http://localhost:8080/api/carts/:idcart/:idproduct Borra un producto especifico de un carrito especifico
- PUT http://localhost:8080/api/carts/:idcart   Modifica del carrito especifico todo el arreglo de sus productos por otro arreglo (hay que enviarle un array con la estructura correspondiente, mas abajo dejo un ejemplo)
- PUT http://localhost:8080/api/carts/:idcart/:idproduct Sobre un carrito especifico modifica el quantity de un producto especifico (hay que enviar por body un objeto con la propiedad quantity y su valor. Ejemplo: {"quantity": 45})

Las vistas son:

- Vista "main" ubicada en http://localhost:8080. Vista principal con dos botones.
- Vista "realTimeProducts" ubicada en http://localhost:8080/realtimeproducts. Donde se pueden ver, agregar o eliminar los productos. Cada producto se puede agregar a un carrito (se agregan al primer carrito del array de carritos)
- Vista "allCartView" ubicada en http://localhost:8080/carts. (vista no solicitada, sirve para ingresar a un carrito especifico y ver si tiene productos o se encuentra vacío)
- Vista "cartView" ubicada en http://localhost:8080/carts/idcart. Muestra los productos que lleva el carrito.



JSON de ejemplo para probar el POST y PUT de los productos:

```javascript
{
"title": "Termo Stanley",
"description": "Un buen termo",
"code": "Termo222",
"price": 100,
"stock": 5555,
"category": "Cocina",
"thumbnails": []
}
```
JSON de ejemplo para probar el PUT del carrito:

```javascript
[{
    "product": "66b0cb4bc884f35231bcf453",
    "quantity": 1,
    "_id": "66b806517354865524cdffaf"
  }]
 ```




Consignas de la tercer entrega:
- Utilizar mongodb
- El repositorio no debe contener la carpeta node_modules
- El metodo get a products debe soportar limit,page,query(filtro por categoria o por disponibilidad),sort
- El metodo get a products debe devolver un objeto con status,productos solicitados y demas metodos que ofrece mongoose-paginate-v2.
- Agregar al router de carts el siguiente endpoint DELETE api/carts/:idcart
- Agregar al router de carts el siguiente endpoint DELETE api/carts/:idcart/:idproduct
- Agregar al router de carts el siguiente endpoint PUT api/carts/:idcart   
- Agregar al router de carts el siguiente endpoint PUT api/carts/:idcart/:idproduct
- Utilizar populate para que el carrito traiga la informacion de los productos y no solo su id
- Modificar la vista de productos para que se muestren paginados
- Cada producto debe contener un boton para agregar al carrito
- Agregar una vista en carts/id para visualizar los productos de ese carrito especifico