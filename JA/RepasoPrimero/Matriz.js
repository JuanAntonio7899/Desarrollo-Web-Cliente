/*funcion que recibe una matriz y que devuelve true si hay algun elemento repetido 
  o false si todos son diferentes */

function iguales(matriz) {
  let acumulados = [];
  for (fila of matriz) {
    for (num of fila) {
      if (acumulados.includes(num)) {
        return true;
      }
      acumulados.push(num);
    }
  }
  return false;
}

let paco = [[8, 6, 7],[9, 3, 3]];

console.log(iguales(paco));

/*Función que reciba dos cadenas y devuelva true si son anagramas y 
false si no son*/

function anagrama(cadena1, cadena2) {

    let c1 = cadena1.split("");
    let c2 = [... cadena2];

    
}