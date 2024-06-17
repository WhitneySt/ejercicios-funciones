//---Declaración de variables/constantes
let resultado;


//----Declaración de funciones

//Función que calcula el factorial de un número (Función recursiva)
//Función declarada
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

//Función expresada
const calcularFactorial = function (n) {
    if (n === 0) {
      return 1;
    } else {
      return n * calcularFactorial(n - 1);
    }
}

//Función flecha

const calcularElFactorial = (n) => {
    if (n === 0) {
      return 1;
    } else {
      return n * calcularElFactorial(n - 1);
    }
}

function saludar(nombre, saludo = "Hola") {
    if (nombre === "Juan") {
        return
    }
    console.log(saludo + " " + nombre);
    return
    alert(saludo + " " + nombre);
}

function verThis() {
    console.log(this);
}

const persona = {
  nombre: "Whitney",
  saludar: function () {
    console.log("Hola a todos. Dice " + this.nombre);
  },
  decirNombre: function() {
    console.log(this.nombre);
  },
  otroMetodo: () => {
    console.log(this.nombre);
  },
  saludarConDelay: function () {
    setTimeout(() => {
      console.log("Hola, " + this.nombre);
    }, 1000);
  },
};

//Callbacks
const funcionA = () => {
    console.log("Soy un callback");
}

const funcionB = (callback) => {
    //Ejecución de otras instrucciones
    console.log("Los callbacks son funciones que son pasadas como parámetros a otras funciones.")
    callback();
}

//---Ejecución de instrucciones

funcionB(funcionA);

verThis();
persona.saludar();
persona.otroMetodo();
persona.saludarConDelay();
persona.decirNombre();

const valorFuncion = saludar("Olmar");
console.log("Valor función Saludar: " + valorFuncion);

saludar("Angie","¿Cómo estás?");

resultado = factorial(5);
console.log("Factorial de 5: " + resultado);
//aqui hay mas código
resultado = factorial(10)
console.log("Factorial de 10: " + resultado);
//aqui hay mas código
resultado = factorial(25);
console.log("Factorial de 25: " + resultado);

resultado = calcularFactorial(5);
console.log("Función expresada --- Factorial de 5: " + resultado);

resultado = calcularElFactorial(5);
console.log("Función flecha --- Factorial de 5: " + resultado);








