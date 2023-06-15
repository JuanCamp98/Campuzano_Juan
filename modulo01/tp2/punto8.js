function generarNumerosAleatorios() {
    var numeros = [];
    
    // Generar 100 números aleatorios únicos
    while (numeros.length < 100) {
      var numero = Math.floor(Math.random() * 100) + 1;
      if (!numeros.includes(numero)) {
        numeros.push(numero);
      }
    }
    
    // Imprimir los números por pantalla
    for (var i = 0; i < numeros.length; i++) {
      document.write(numeros[i] + " ");
    }
  }
  
  generarNumerosAleatorios();