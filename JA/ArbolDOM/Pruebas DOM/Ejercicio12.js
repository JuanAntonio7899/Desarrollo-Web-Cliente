window.onload = function () {
  let boton1 = document.getElementsByTagName("button")[0];
  let boton2 = document.getElementsByTagName("button")[1];
  let foto = document.getElementsByTagName("img")[0];
  let estilos = window.getComputedStyle(foto);
  let posicion = parseInt(estilos.getPropertyValue("left")); // Convert the position to an integer
  console.log(foto.style.left);

  boton1.onclick = function () {
    if (posicion === 0) {
      foto.style.left = posicion + 5 + "px";
    } else {
      foto.style.left = posicion + 5 + "px"; 
    }
  };
};