function sumaArray(array) {
    let resultado = [];
    let sumaArray = 0;

    for (let i = 0; i < array.length; i++) {
      sumaArray += array[i];
      resultado[i] = sumaArray;
    }

    return resultado;
  }

  // Ejemplo
  let array = [1, 2, 3, 4, 5, 6];
  let arraySuma = sumaArray(array);
  console.log(arraySuma);