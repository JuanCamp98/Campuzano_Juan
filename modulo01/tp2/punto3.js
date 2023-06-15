let num = prompt("Ingrese un número");
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial = factorial * i;
}

document.write(factorial);
