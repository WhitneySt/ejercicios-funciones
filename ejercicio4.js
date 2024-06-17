const generarNumerosAleatorios = () => {
  const numeros = [];

  while (numeros.length < 100) {
    const numeroAleatorio = Math.floor(Math.random() * (1000 - 1 + 1) + 1);

    if (!numeros.includes(numeroAleatorio)) {
      numeros.push(numeroAleatorio);
    }
    }
    
    numeros.sort(function (a, b) {
      return a - b;
    });

    console.log(numeros);
};

generarNumerosAleatorios();
