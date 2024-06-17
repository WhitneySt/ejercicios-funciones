function sumar(a, b = 10) {
  if (isNaN(a) || isNaN(b)) {
    console.error("Uno de los parámetros no es un número");
    return;
  }
  return a + b;
}

//Resultado

let resultado = sumar(5);
console.log("Resultado con un argumento: " + resultado);

resultado = sumar(6, 16);
console.log("Resultado con dos argumentos: " + resultado);

resultado = sumar("af.dlf", "a<dfmadf");
console.log("Resultado con dos argumentos NaN: " + resultado);
