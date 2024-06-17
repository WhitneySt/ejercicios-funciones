let resultado;

const calculadora = (numero1, numero2, operacion) => {
  if (isNaN(numero1) || isNaN(numero2)) {
    console.error(
      "Alguno de los dos primeros argumentos no es un valor numérico"
    );
    return;
  }
  switch (operacion.toLowerCase()) {
    case "suma":
      return numero1 + numero2;
    case "resta":
      return numero1 - numero2;
    case "multiplicación":
      return numero1 * numero2;
    case "división":
      return numero1 / numero2;
    default:
      console.error("La operación indicada no existe en la calculadora");
      return;
  }
};

resultado = calculadora(6, 4, "división");
console.log("Resultado = " + resultado);
