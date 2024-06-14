/*      setTimeout      */
console.log("Primer log"); // Aparece primero en consola
setTimeout(() => {
  console.log("Segundo log"); // Aparece tercero en consola
}, 200);
console.log("Tercer log"); // Aparece segundo en consola

/*      setInterval      */
let funcionSetInterval = setInterval(() => {
  console.log("setInterval log"); // Ejecuta el log "setInterval log" cada 300 segundos
}, 200);

setInterval(() => {
  clearInterval(funcionSetInterval); // Corta la ejecucion de funcionSetInterval despues de 3000 segundos
}, 500);
