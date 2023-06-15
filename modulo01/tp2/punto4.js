function determinarParidad(numero) {
    if (numero % 2 === 0) {
      return "par";
    } else {
      return "impar";
    }
  }
  
  var num = parseInt(prompt("Ingrese un número entero:"));
  var resultado = determinarParidad(num);
  document.write("El número ingresado es: " + resultado);