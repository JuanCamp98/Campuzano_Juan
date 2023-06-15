function obtenerCantidadDias(mes) {
    if (mes === 2) {
      return "28 o 29 días";
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
      return "30 días";
    } else {
      return "31 días";
    }
  }
  
  var mes = parseInt(prompt("Ingrese el número de un mes:"));
  var cantidadDias = obtenerCantidadDias(mes);
  document.write("El mes " + mes + " tiene " + cantidadDias);