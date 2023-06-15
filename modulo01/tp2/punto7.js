function revertirTexto(texto) {
    var textoRevertido = "";
    
    for (var i = texto.length - 1; i >= 0; i--) {
      textoRevertido += texto[i];
    }
    
    return textoRevertido;
  }
  
  var texto = "Hola, mundo!";
  var textoRevertido = revertirTexto(texto);
  document.write(textoRevertido);