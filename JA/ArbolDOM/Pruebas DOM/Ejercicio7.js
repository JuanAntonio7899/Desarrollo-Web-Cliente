//Apartado A

// window.onload = function() {
//     // Seleccionamos todas las celdas de la tabla
//     const celdas = document.querySelectorAll('td');
  
//     // Recorremos todas las celdas y les asignamos un evento onclick
//     celdas.forEach(function(celda) {
//       celda.onclick = function() {
//         // Usamos 'this' para referirnos a la celda que ha sido clicada
//         this.style.backgroundColor = 'black';
//       };
//     });
//   };






//Apartado B



// window.onload = function() {
//     // Seleccionamos todas las celdas de la tabla
//     const celdas = document.querySelectorAll('td');
  
//     // Recorremos todas las celdas y les asignamos un evento onclick
//     celdas.forEach(function(celda) {
//       celda.onclick = function() {
//         // Si la celda ya es negra, la cambiamos a blanco. Si no, la cambiamos a negro.
//         if (this.style.backgroundColor === 'black') {
//           this.style.backgroundColor = 'white';
//         } else {
//           this.style.backgroundColor = 'black';
//         }
//       };
//     });
//   };




//Super Mejora
window.onload = function() {
    const colores = ['red', 'green', 'blue', 'yellow']; // Lista de colores
    const celdas = document.querySelectorAll('td'); // Seleccionamos todas las celdas
  
    // Asignamos el evento de clic a cada celda
    celdas.forEach(function(celda) {
      celda.onclick = function() {
        cambiarColor(this, colores);
      };
    });
  };
  
  // Función para cambiar de color siguiendo la lista de colores
  function cambiarColor(celda, colores) {
    const colorActual = celda.style.backgroundColor; // Obtener color actual
    let indiceActual = colores.indexOf(colorActual); // Buscar el índice en la lista de colores
  
    // Si el color no está en la lista, comenzamos desde el primer color
    if (indiceActual === -1) {
      indiceActual = 0;
    } else {
      // Si está en la lista, avanzamos al siguiente color
      indiceActual = (indiceActual + 1) % colores.length;
    }
  
    // Asignamos el nuevo color a la celda
    celda.style.backgroundColor = colores[indiceActual];
  }