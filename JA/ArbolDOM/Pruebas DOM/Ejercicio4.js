window.onload = function () {
  let coches = [
    "f40.jpg",
    "f50.webp",
    "ferrari enzo.webp",
    "FerrariRoma.webp",
    "Laferrari.webp",
  ];

  let pos = 0;

  let foto = document.getElementById("fotillos");
  let boton1 = document.getElementById("Boton1");
  let boton2 = document.getElementById("Boton2");

  // Actualiza la imagen mostrada en función del índice actual
  function updateImagen() {
    foto.src = coches[pos];

    // Desactivar el botón de "Retroceder" si estamos en la primera imagen
    if (pos === 0) {
      
      boton1.disabled = true;
    } else {
     
      boton1.disabled = false;
    }

    // Desactivar el botón de "Avanzar" si estamos en la última imagen
    if (pos === coches.length - 1) {
     
      boton2.disabled = true;
    } else {
      
      boton2.disabled = false;
    }
  }

  // Evento del botón "Avanzar"
  boton2.onclick = function () {
    if (pos < coches.length - 1) {
      pos++;
      updateImage();
    }
  };

  // Evento del botón "Retroceder"
  boton1.onclick = function () {
    if (pos > 0) {
      pos--;
      updateImage();
    }
  };

  // Inicializamos la galería
  updateImage();
};
