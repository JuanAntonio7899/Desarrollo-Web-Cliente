do {
  tam = parseInt(prompt("Introduce un número: "));
} while (isNaN(tam)|| tam < 1);

let matriz = [];
for (let i = 0; i < tam.length; i++) {
  let array = [];

  for (let j = 0; j < tam.length; j++) {
    array.push(parseInt(Math.random()*(tam+1)+tam))
  }
  matriz.push(array);
}

function fizzbuzz(matriz) {


    
    
}