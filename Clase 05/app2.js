const fs = require("fs");
//Crea el archivo que le pasamos por parametro y luego escribe en el (lo que pasamos en segundo parametro)
fs.writeFileSync("./ejemploClase05", "Archivo creado desde FS");

//Lee un archivo (para leerlo en consola lo guardamos en una variable)
const leerArchivo = fs.readFileSync("./ejemploClase05", "utf-8");
console.log("Leyendo desde fs.writeFileSync:", leerArchivo);

//Escribe un archivo o lo crea si no lo encuentra (y luego le escribe)
fs.appendFile;
//Busca un archivo y si lo encuentra devulve true, si no lo encuentra devuelve false
const leerArchivoInexistente = fs.existsSync("./Este archivo no existe");
console.log(
  "Si no existe es false, si existe es true:",
  leerArchivoInexistente
);

//Elimina el archivo pasado por parametro
fs.unlinkSync("./ejemploClase05");
