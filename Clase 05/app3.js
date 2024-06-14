const fs = require("fs");

async function readAndWriteFile() {
  try {
    await fs.promises.writeFile("nuevo-archivo.txt", "¡Hola, mundo!");
    console.log("Archivo nuevo-archivo.txt creado.");

    const data = await fs.promises.readFile("nuevo-archivo.txt", "utf-8");
    console.log("Contenido del archivo:", data);
  } catch (error) {
    console.error("Error al leer o escribir el archivo:", error.message);
  }
}

readAndWriteFile();

//JSON.stringify();
//JSON.parse();
