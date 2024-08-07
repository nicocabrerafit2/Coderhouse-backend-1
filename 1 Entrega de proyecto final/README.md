Link al proyecto en github:

- https://github.com/nicocabrerafit2/Coderhouse-backend-1/tree/main/1%20Entrega%20de%20proyecto%20final

IMPORTANTE!!!!!

- Paso 1 Abrir terminal estando parados sobre el app.js
- Paso 2 Instalar dependencias
- Paso 3 Ejecutar el comando "npm start"

Los endpoints para los productos son:

- GET http://localhost:8080/api/products
- GET http://localhost:8080/api/products/:id
- POST http://localhost:8080/api/products
- PUT http://localhost:8080/api/products/:id
- DELETE http://localhost:8080/api/products/:id

Los endpoints para los carritos son:

- GET http://localhost:8080/api/carts
- GET http://localhost:8080/api/carts/:id
- POST http://localhost:8080/api/carts
- POST http://localhost:8080/api/carts/:idcart/:idproduct

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

La consigna del entregable era:

Desarrollar un servidor que contenga los endpoints y servicios necesarios para gestionar los productos y carritos de compra en el e-commerce​.

Desarrollar el servidor basado en Node.JS y express, que escuche en el puerto 8080 y disponga de dos grupos de rutas: /products y /carts. Dichos endpoints estarán implementados con el router de express, con las siguientes especificaciones:​

Para el manejo de productos, el cual tendrá su router en /api/products/ , configurar las siguientes rutas:​

\*La ruta raíz GET / deberá listar todos los productos de la base. (Incluyendo la limitación ?limit del desafío anterior​

\*La ruta GET /:id deberá traer sólo el producto con el id proporcionado​

\*La ruta raíz POST / deberá agregar un nuevo producto con los campos:​

\*id: Number/String (A tu elección, el id NO se manda desde body, se autogenera como lo hemos visto desde los primeros entregables, asegurando que NUNCA se repetirán los ids en el archivo.​
\*title:String,​
\*description:String​
\*code:String​
\*price:Number​
\*status:Boolean​
\*stock:Number​
\*category:String​
\*thumbnails:Array de Strings que contenga las rutas donde están almacenadas las imágenes referentes a dicho producto​

- Status es true por defecto.​(No se manda desde body)

- Todos los campos son obligatorios, a excepción de thumbnails​

- La ruta PUT /:id deberá tomar un producto y actualizarlo por los campos enviados desde body. NUNCA se debe actualizar o eliminar el id al momento de hacer dicha actualización.​

- La ruta DELETE /:id deberá eliminar el producto con el id indicado. ​

Para el carrito, el cual tendrá su router en /api/carts/, configurar dos rutas:​

- La ruta raíz POST / deberá crear un nuevo carrito con la siguiente estructura:​

\*Id:Number/String (A tu elección, de igual manera como con los productos, debes asegurar que nunca se dupliquen los ids y que este se autogenere).​

\*products: Array que contendrá objetos que representen cada producto​

- La ruta GET /:id deberá listar los productos que pertenezcan al carrito con el parámetro id proporcionados.​

- La ruta POST /:cid/product/:pid deberá agregar el producto al arreglo “products” del carrito seleccionado, agregándose como un objeto bajo el siguiente formato:​

\*product: SÓLO DEBE CONTENER EL ID DEL PRODUCTO (Es crucial que no agregues el producto completo)​
\*quantity: debe contener el número de ejemplares de dicho producto. El producto, de momento, se agregará de uno en uno.​
Además, si un producto ya existente intenta agregarse al producto, incrementar el campo quantity de dicho producto.
​
La persistencia de la información se implementará utilizando el file system, donde los archivos “productos,json” y “carrito.json”, respaldan la información.​

No es necesario realizar ninguna implementación visual, todo el flujo se puede realizar por Postman o por el cliente de tu preferencia.​
Formato​

Sugerencias​:
No es necesario implementar multer​
