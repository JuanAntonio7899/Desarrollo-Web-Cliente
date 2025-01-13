
function generarNumAle(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}






function crearMatrizRandom() {
  // Solicitar al usuario el tamaño de la matriz
  const N = parseInt(prompt("Introduce el tamaño de la matriz (N): "), 10);

  // Crear la matriz NxN
  let matriz = [];

  // Llenar la matriz con números aleatorios
  for (let i = 0; i < N; i++) {
    matriz[i] = [];
    for (let j = 0; j < N; j++) {
      matriz[i][j] = Math.floor(Math.random() * 100); // Número aleatorio entre 0 y 99
    }
  }

  // Imprimir la matriz
  console.log(matriz);
  return matriz;
}

// Llamar a la función
// crearMatrizRandom();






function encontrarMaximoArray(array) {
    return Math.max(...array);
  }
  
  // Ejemplo
  let arrayEjemplo2 = [10, 20, 5, 50, 2];
  console.log(encontrarMaximoArray(arrayEjemplo2)); // 50








  function transponerMatriz(matriz) {
    let matrizTranspuesta = [];
    for (let i = 0; i < matriz[0].length; i++) {
      matrizTranspuesta[i] = [];
      for (let j = 0; j < matriz.length; j++) {
        matrizTranspuesta[i][j] = matriz[j][i];
      }
    }
    return matrizTranspuesta;
  }
  
  // Ejemplo
  let matrizEjemplo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(transponerMatriz(matrizEjemplo));
  // Resultado:
  // [
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [3, 6, 9]
  // ]



  function esPalindromo(array) {
    let invertido = [...array].reverse();
    return array.every((valor, indice) => valor === invertido[indice]);
  }
  
  // Ejemplo
  let arrayPalindromo1 = [1, 2, 3, 2, 1];
  console.log(esPalindromo(arrayPalindromo)); // true




  function esPalindromo(array) {
    // Crear una copia del array e invertirla
    let invertido = [...array].reverse();
    
    // Inicializar una variable para verificar si es palíndromo
    let esSimetrico = true;
    
    // Comparar cada elemento del array original con el array invertido
    for (let i = 0; i < array.length; i++) {
      // Si hay una discrepancia, actualizar la variable y continuar
      if (array[i] !== invertido[i]) {
        esSimetrico = false; // Si no coinciden, no es palíndromo
      }
    }
    
    // Devolver el resultado
    return esSimetrico;
  }
  
  // Ejemplo
  let arrayPalindromo2 = [1, 2, 3, 2, 1];
  console.log(esPalindromo(arrayPalindromo)); // true
  
  let arrayNoPalindromo = [1, 2, 3, 4, 5];
  console.log(esPalindromo(arrayNoPalindromo)); // false



  // Definición de la función
function filtroColores(colores,usuario) {
    
    let colorOK = [];
    let colorNO = [];

    // Recorrer el array 'usuario' y separar colores y no colores
    for (let i = 0; i < usuario.length; i++) {
        if (colores.includes(usuario[i])) {
            colorOK.push(usuario[i]); // Si es un color, lo añadimos a coloresEncontrados
        } else {
            colorNO.push(usuario[i]); // Si no es un color, lo añadimos a noColores
        }
    }

    // Concatenar colores y no colores
    return colorOK.concat(colorNO);
}




function sumaArray(array) {
    let resultado = [];
    let sumaAcumulada = 0;

    for (let i = 0; i < array.length; i++) {
      sumaAcumulada += array[i];
      resultado[i] = sumaAcumulada;
    }

    return resultado;
  }

  // Ejemplo
  let array = [1, 2, 3, 4, 5, 6];
  let arraySuma = sumaArray(array);
  console.log(arraySuma);




  function filtroNombres(){
    let amigos = ["Luis", "Estela", "Angel", "Enya", "Jose Antonio"];
    let amigosReal = [""];
    amigos.forEach((ele) => {
        if ((ele[i].length)==4) amigosReal.push(amigos[i]);
    });
    console.log(amigosReal);
    
}



/*
    Crear una función que traduzca una cadena de ADN y ARN.
    Por ejemplo:
        Si se introduce la cadena GCAT, a salida debe ser GCAU
        Si se introduce la cadena GCATCGTA, a salida debe ser GCAUCGUA
*/
function quimica(cadenaADN) {
    
    // Creo la cadena ARN
    let cadenaARN ='';

    return cadenaADN.replaceAll('T','U');

    // Recorro la cadena
    // for (let i = 0; i < cadenaADN.length; i++) {
    //     const element = cadenaADN[i];
    //     if (element=='T') cadenaARN +='U';
    //     else cadenaARN += element;
    // }
    //return cadenaARN;    
}


console.log(quimica("GCAT"));





function countBy(x, y) {
    // Verificamos si alguno de los números es negativo o cero
    if (x <= 0 || y <= 0) {
      return [];
    }
    
    // Inicializamos un array vacío
    let multiplos = [];
    
    // Llenamos el array con los Y primeros múltiplos de X
    for (let i = 0; i < y; i++) {
      multiplos[i] = x * (i + 1);
    }
    
    return multiples;
  }
  
  // Ejemplo 
  console.log(countBy(3, 5));  
  console.log(countBy(0, 5));  
  console.log(countBy(-3, 5)); 




  function numMayor() {
    let candidato = 0;
    matriz.forEach(element => {
        for (let i = 0; i < matriz.length; i++) {
            if (candidato < element[i]) candidato = element[i];  
        }
    });
}
    console.log(candidato);