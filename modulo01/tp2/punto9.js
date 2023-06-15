function calcularPromedio(notas) {
    var suma = 0;
  
    for (var i = 0; i < notas.length; i++) {
      suma += notas[i];
    }
  
    var promedio = suma / notas.length;
    return promedio;
  }
  
  function imprimirEstado(promedio) {
    if (promedio < 5) {
      document.write("Reprobado");
    } else if (promedio >= 6 && promedio <= 8) {
      document.write("Aprobado");
    } else {
      document.write("Sobresaliente");
    }
  }
  
  var notas = [];
  var cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas:"));
  
  for (var i = 0; i < cantidadNotas; i++) {
    var nota = parseInt(prompt("Ingrese la nota #" + (i + 1) + ":"));
    while (nota < 0 || nota > 10) {
      nota = parseInt(prompt("Ingrese una nota válida (entre 0 y 10):"));
    }
    notas.push(nota);
  }
  
  var promedio = calcularPromedio(notas);
  imprimirEstado(promedio);