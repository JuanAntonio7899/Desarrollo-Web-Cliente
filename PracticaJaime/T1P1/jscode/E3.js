function ejercicio3() {
  //Apartado A
  do {
    var num = Number(prompt("Introduce números positivos"));
    if (isNaN(num)) {
      alert("Error, introduce un número");
    }
  } while (isNaN(num) || num > 0);

  let array = [];
  for (let i = 0; i < array.length; i++) {
    array[i] = num;
  }

  console.log(array);

  //Apartado B
}
