Link al proyecto en github:

- https://github.com/nicocabrerafit2/Coderhouse-backend-1/tree/main/2%20Entrega%20de%20proyecto%20final

IMPORTANTE!!!!!

- Paso 1 Abrir terminal estando parados sobre el app.js
- Paso 2 Instalar dependencias "npm i"
- Paso 3 Ejecutar el comando "npm start"
- Paso 4 Abrir el navegador e ingresar a http://localhost:8080

Esta segunda entrega se basa en la primera.
Se añaden vistas con los productos almacenados, una vista utiliza websocket y la otra no.
Se utiliza como motor de plantillas handlebars.

- Vista "home" ubicada en http://localhost:8080/productNoWebsocket. NO utiliza websocket.
- Vista "realTimeProducts" ubicada en http://localhost:8080/realtimeproducts. SI utiliza websocket.

Donde se pueden abrir ambas pestañas y agregar o eliminar productos, y ver como en la vista con websocket se actualiza la lista de productos y en la otra vista no lo hace (hace falta recargar la pagina para que lo haga).
