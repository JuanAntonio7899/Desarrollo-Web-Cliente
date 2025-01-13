function ejecutarScript() {
    let numeros = [];
    let numero;

    // a) Pedir números positivos hasta que el usuario meta un número negativo
    do {
        numero = parseInt(prompt("Introduce un número positivo (o un número negativo para terminar):"));
        if (!isNaN(numero) && numero >= 0) {
            numeros.push(numero);
        }
    } while (numero >= 0);

    // b) Muestra por consola todos los números introducidos separados por espacio
    console.log("b) Números introducidos: " + numeros.join(" "));

    // c) Muestra por consola la suma de todos esos números (sin el uso de .reduce)
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    console.log("c) Suma de los números: " + suma);

    // d) Pedir al usuario un número entero positivo (controla que sea positivo)
    let numeroBuscar;
    do {
        numeroBuscar = parseInt(prompt("Introduce un número entero positivo que quieras buscar en la lista:"));
        if (isNaN(numeroBuscar) || numeroBuscar < 0) {
            alert("El número debe ser un entero positivo. Inténtalo de nuevo.");
        }
    } while (isNaN(numeroBuscar) || numeroBuscar < 0);

    // e) Mostrar la posición de la primera y última aparición del número en la lista (si existe)
    let primeraPosicion = numeros.indexOf(numeroBuscar);
    let ultimaPosicion = numeros.lastIndexOf(numeroBuscar);

    if (primeraPosicion === -1) {
        console.log(`e) El número ${numeroBuscar} no se encuentra en la lista.`);
    } else {
        console.log(`e) El número ${numeroBuscar} aparece por primera vez en la posición ${primeraPosicion} y por última vez en la posición ${ultimaPosicion}.`);
    }
}