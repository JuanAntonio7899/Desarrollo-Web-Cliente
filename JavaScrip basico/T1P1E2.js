// Variables para contar las calificaciones
let suspensos = 0;
let aprobados = 0;
let notables = 0;
let sobresalientes = 0;

// Función para solicitar una calificación válida
function pedirNota() {
    let nota;
    do {
        nota = parseInt(prompt("Introduce una calificación entre 0 y 10:"));
        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Calificación no válida. Introduce un número entero entre 0 y 10.");
        }
    } while (isNaN(nota) || nota < 0 || nota > 10);
    return nota;
}

// Pedir 10 calificaciones
for (let i = 0; i < 10; i++) {
    let calificacion = pedirNota();

    // Clasificar las calificaciones
    if (calificacion < 5) {
        suspensos++;
    } else if (calificacion <= 6) {
        aprobados++;
    } else if (calificacion <= 8) {
        notables++;
    } else {
        sobresalientes++;
    }
}

// Mostrar el resultado
alert("Número de suspensos: " + suspensos + "\n" +
      "Número de aprobados: " + aprobados + "\n" +
      "Número de notables: " + notables + "\n" +
      "Número de sobresalientes: " + sobresalientes);