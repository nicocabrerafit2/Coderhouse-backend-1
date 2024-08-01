const M = 2023;
function convertir_a_numero(string) {
  const number = parseInt(string);
  return number;
}
function compute(n) {
  let s = "";
  //para i desde 1 hasta n
  s = s + n;
  const result = M % convertir_a_numero(s);

  return result;
}
//para cada n en 1, 2, 5, 10, 20, 827785024886475841
console.log(compute(10));
/*
Resultado parcial de la ejecución
1: 1
2: 22
5: 934
10: 738
20: 1481
827785024886475841: ???

*/
