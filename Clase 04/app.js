/* Obsoleto y no escalable
const numList = [];
const diezNumeros = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const respuesta = diezNumeros.map((num) => numList.push(Math.random()));
*/

//La siguiente es una mejor manera
const elementosArray = 10;
const diezNumeros = Array.from({ length: elementosArray }, () => Math.random());

/*Obsoleto y no escalable
const calcularRepetidos = (array) => {
  return array.reduce((previo, numero) => {
    previo[numero] == numero
      ? (previo[numero] = previo[numero] + 1)
      : (previo[numero] = numero);
    return previo;
  }, {});
};
*/

//La siguiente es una mejor manera
const calcularRepetidos = (array) => {
  return array.reduce((previo, numero) => {
    return {
      ...previo,
      [numero]: previo[numero] + 1 || 1,
    };
  }, {});
};
