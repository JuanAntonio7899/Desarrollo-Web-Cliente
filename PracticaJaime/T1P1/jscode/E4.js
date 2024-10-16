function generarNumAle(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function sumaMatriz(matriz) {
    let resultado = 0;
    let suma = 0;

    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        suma += matriz[i][j];
        
      }
    }
    
    return suma;
  }

function ejercicio4() {
  let matriz = [[], [], []];

  // Llenar la matriz con números aleatorios (Apartado a)
  for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
      matriz[i][j] = generarNumAle(2, 20);
    }
  }

  // Imprimir la matriz (Apartado b)
  
  console.log(matriz);

  //Apartado c
  console.log("La suma de los elementos es: "+ sumaMatriz(matriz));

  
  
  
}


