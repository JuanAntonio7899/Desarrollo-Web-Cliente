function recogerNumero(cadena) {
  do {
    var num = Number(prompt(cadena));
    if (isNaN(num)) {
      alert("Error, introduce un número");
    }
  } while (isNaN(num));

  return num;
}

function sumar(num1, num2) {
  return num1 + num2;
}

function resta(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}
function dividir(num1, num2) {
  return num1 / num2;
}

function recogeOperacion(cadena) {
  let operaciones = ["sumar", "restar", "multiplicar", "dividir"];


  do {
    var res = prompt("Sumar, restar, multiplicar, dividir ").toLowerCase();
  } while (!operaciones.includes(res));

  return res;
}

function principal() {
  let a = recogerNumero();
  let b = recogerNumero();
  let ope = recogeOperacion();
  let res;

  switch (ope) {
    case "sumar":
      res = sumar(a, b);

      break;

    case "restar":
      res = resta(a, b);

      break;

    case "multiplicar":
      res = multiplicar(a, b);

      break;

    case "dividir":
      res = dividir(a, b);

      break;

    default:
      alert("error");
      break;
  }

  alert("El resultado es " + res);
}
