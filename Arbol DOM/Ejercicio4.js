window.onload = function() {
    const images = [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg',
      'image5.jpg'
    ];
  
    let currentImageIndex = 0;
  
    const imageElement = document.getElementById('gallery-image');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
  
    // Actualiza la imagen mostrada en función del índice actual
    function updateImage() {
      imageElement.src = images[currentImageIndex];
  
      // Desactivar el botón de "Retroceder" si estamos en la primera imagen
      if (currentImageIndex === 0) {
        prevBtn.classList.add('disabled');
        prevBtn.disabled = true;
      } else {
        prevBtn.classList.remove('disabled');
        prevBtn.disabled = false;
      }
  
      // Desactivar el botón de "Avanzar" si estamos en la última imagen
      if (currentImageIndex === images.length - 1) {
        nextBtn.classList.add('disabled');
        nextBtn.disabled = true;
      } else {
        nextBtn.classList.remove('disabled');
        nextBtn.disabled = false;
      }
    }
  
    // Evento del botón "Avanzar"
    nextBtn.onclick = function() {
      if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        updateImage();
      }
    };
  
    // Evento del botón "Retroceder"
    prevBtn.onclick = function() {
      if (currentImageIndex > 0) {
        currentImageIndex--;
        updateImage();
      }
    };
  
    // Inicializamos la galería
    updateImage();
  };