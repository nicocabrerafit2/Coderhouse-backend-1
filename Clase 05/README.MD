En esta clase vemos manejo de archivos con el modulo FS.
Temas vistos:

- setTimeout
  Recibe 2 parametros, en primer lugar la funcion a ejecutar y luego el tiempo necesario que transcurra para ejecutar esa funcion.
  Es una funcion asincronica de por si. Node.js ya sabe que es asincronica

- setInterval
  Este método permite ejecutar una función repetidamente a intervalos regulares de tiempo.
  Recibe 2 parametros, en primer lugar la funcion a ejecutar y luego el tiempo que trascurra para volver a ejecutar la funcion.

- clearInterval
  se utiliza para cancelar un temporizador de intervalo que se estableció previamente con el método setInterval().Cuando ya no necesitas que la función se ejecute repetidamente, puedes cancelar el temporizador utilizando clearInterval(). Para hacerlo, proporcionas el identificador del intervalo que deseas cancelar. Este identificador se obtiene al llamar a setInterval()

- FS
  fs.writeFileSync(file, data[, options]):
  Esta función se utiliza para escribir datos en un archivo de forma sincrónica.
  Bloquea la ejecución del script hasta que se complete la escritura en el archivo.
  Puedes proporcionar una cadena o un buffer como datos a escribir.
  Útil para escribir archivos pequeños o cuando necesitas asegurarte de que los datos se hayan escrito antes de continuar.

  fs.readFileSync(file[, options]):
  Esta función se utiliza para leer un archivo de forma sincrónica.
  Bloquea la ejecución del script hasta que se complete la lectura del archivo.
  Devuelve los datos del archivo como un buffer o una cadena (según las opciones).
  Útil para leer archivos pequeños o cuando necesitas esperar a que se complete la lectura antes de continuar con otras operaciones.

  fs.appendFile(file, data[, options], callback):
  Esta función añade datos a un archivo de forma asincrónica.
  Si el archivo no existe, Node lo crea automáticamente.
  Puedes proporcionar una cadena o un buffer como datos a añadir.
  Útil para agregar información a un archivo existente sin sobrescribirlo completamente.

  fs.promises
  El módulo fs.promises en Node.js proporciona métodos asincrónicos para interactuar con el sistema de archivos. Aquí tienes más detalles:

Funciones Asincrónicas: El módulo fs.promises ofrece versiones asincrónicas de las operaciones de sistema de archivos. Estas funciones devuelven promesas en lugar de utilizar el estilo de llamadas de retorno tradicional.
Ventajas:
No bloquean el hilo principal: Las operaciones asincrónicas no detienen la ejecución del resto del código mientras esperan a que se complete la operación de archivo.
Compatibilidad con async/await: Puedes usar async/await para manejar las promesas devueltas por estas funciones.

try - catch
async - await

Para poder guardar arrays utilizamos lo siguiente
JSON.stringify()
JSON.parse()
