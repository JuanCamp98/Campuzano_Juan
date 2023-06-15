function mostrarInformacionCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      console.log("La cadena está formada solo por mayúsculas");
    } else if (cadena === cadena.toLowerCase()) {
      console.log("La cadena está formada solo por minúsculas");
    } else {
      console.log("La cadena está formada por una mezcla de mayúsculas y minúsculas");
    }
  }
  
  var texto = prompt("Ingrese una cadena de texto:");
  mostrarInformacionCadena(texto);