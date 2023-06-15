var valores = [true, false, 2, "hola", "mundo", 3, "char"];

var elementosDeTexto = valores.filter(function (elemento) {
  return typeof elemento === "string";
});

var elementoMasLargo = elementosDeTexto.reduce(function (a, b) {
  return a.length > b.length ? a : b;
});

console.log("El elemento de texto más largo es:", elementoMasLargo);

var elementosOrdenadosPorLongitud = elementosDeTexto.sort(function (a, b) {
  return a.length - b.length;
});

console.log("Elementos ordenados por longitud:", elementosOrdenadosPorLongitud);


var numeros = valores.filter(function (elemento) {
  return typeof elemento === "number";
});

var suma = numeros[0] + numeros[1];
var resta = numeros[0] - numeros[1];
var multiplicacion = numeros[0] * numeros[1];
var division = numeros[0] / numeros[1];

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
