/*               PROBLEMA 1 ----------------------------------Obsoleto y no escalable


const numList = [];
const diezNumeros = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const respuesta = diezNumeros.map((num) => numList.push(Math.random()));
*/

//La siguiente es una mejor manera
const elementosArray = 10;
//crea un array dde cantidad igual a la definida en la variable elementosArray (cada elemento es un undefined)
const diezNumeros = Array.from({ length: elementosArray }, () => {
  return Math.random();
});

/*                PROBLEMA 2 ----------------------------------Obsoleto y no escalable
Obsoleto y no escalable
const array = [1,1,2,2,2,2,3,4,5,6]
const calcularRepetidos = (array) => {
  return array.reduce((previo, numero) => {
    previo[numero] == numero? (previo[numero] = previo[numero] + 1): (previo[numero] = numero);
    return previo;
  }, {});
};
*/

//La siguiente es una mejor manera
const array = [1, 1, 2, 2, 2, 2, 3, 4, 5, 6];
const calcularRepetidos = (array) => {
  return array.reduce((previo, numero) => {
    return {
      ...previo,
      [numero]: previo[numero] + 1 || 1,
    };
  }, {});
};
console.log(calcularRepetidos(array));
