function encontrarPrimeraVocal(texto) {
    var vocales = ["a", "e", "i", "o", "u"];
  
    for (var i = 0; i < texto.length; i++) {
      var caracter = texto[i].toLowerCase();
  
      if (vocales.includes(caracter)) {
        var posicion = i + 1;
        console.log("'" + caracter + "' es la vocal número " + posicion);
        return;
      }
    }
  
    console.log("No se encontró ninguna vocal en el texto.");
  }
  
  var texto = prompt("Ingrese un texto:");
  encontrarPrimeraVocal(texto);