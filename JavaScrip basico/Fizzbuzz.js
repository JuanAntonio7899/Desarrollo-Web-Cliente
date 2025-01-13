function crearMatriz() {
  for (let j = 0; j < matriz.length; j++) {
    //mayor-menor+1)+menor
    let mayor = tam * 2;
    let menor = tam;

    console.log(`${menor},${mayor}`);

    matriz[i][j] = Math.random() * (mayor - menor + 1) + menor;
    menor = tam;
    matriz[i][j] = Math.trunc(Math.random() * (mayor - menor + 1) + menor);
  }
}
console.log(matriz);
function numMayor() {}

console.log(numMayor);
return matriz;

// Apartado b)
function mostrarMatriz() {
  let matriz = numMayor();
  let cadena = "";
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      if (matriz[i][j] < 10) {
        cadena += "0" + matriz[i][j];
      } else cadena += matriz[i][j];
      cadena += " ";
    }
    cadena += "\n";
  }
  console.log(cadena);
  return matriz;
}

// Apartado c)
function sumaTotal() {
  let matriz = mostrarMatriz();
  let sumaTotal = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      sumaTotal += matriz[i][j];
    }
  }
  console.log("La suma total es: " + sumaTotal);
  return matriz;
}

// Apartado d)
function fizzbuzz() {
  let matriz = sumaTotal();
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      if (matriz[i][j] % 3 == 0 && matriz[i][j] % 5 == 0)
        matriz[i][j] = "Fizz-Buzz";
      else if (matriz[i][j] % 3 == 0) matriz[i][j] = "Fizz";
      else if (matriz[i][j] % 5 == 0) matriz[i][j] = "Buzz";
      else matriz[i][j] = matriz[i][j];
    }
  }
  console.log(matriz);
}
