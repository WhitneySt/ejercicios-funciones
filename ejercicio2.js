//Declaración variables/constante
const frutas = ["manzanas", "peras", "mangos", "uvas", "uchuva"];

//Declaración de funciones
function agregarElemento(lista, elemento = "") {
  if (elemento === "") {
    console.log("No se indicó el elemento a agregar en el array");
    return;
  }
  lista.push(elemento);
}

function eliminarElemento(lista, posicion = "") {
  const posicionAEliminar = posicion === "" ? lista.length - 1 : posicion;
  lista.splice(posicionAEliminar, 1);
}

function agregarOEliminarElemento(lista, callback, elementoOPosicion) {
  callback(lista, elementoOPosicion);
  console.log("Así queda la lista: " + lista);
}

//ejecutar código
agregarOEliminarElemento(frutas, agregarElemento, "banano");
agregarOEliminarElemento(frutas, eliminarElemento, 3);
