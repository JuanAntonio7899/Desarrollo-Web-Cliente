let fondos = ["red","green","blue","yellow","orange","pink","lightblue","lightgreen"];
let ccolores = ["#00FF48","#D4478E","#FFD100","#0070FF","#7AAA83","#385B66","#ED91BF","#95AD95"];


let index = 0; //contador para cambiar el fondo de color
let indice = 0; //contador para cambiar la figura de color 

// Función creada para cambiar de color el fondo 
function CambioColorFondo(ele, array) {
  if (index == array.length) index = 0;
  ele.style.backgroundColor = array[index];
  index++;
}


function CambioColorFigura(ele, array) {
  if (indice == array.length) indice = 0;
  ele.style.backgroundColor = array[indice];
  indice++;
}

window.onload = function () {
  let padre = document.querySelector("main");

  padre.onmousedown = function (event) {
    CambioColorFondo(padre, fondos);
    
      // Creamos la figura
      let figura = document.createElement("div");
      figura.style.height = "100px";
      figura.style.width = "100px";
      figura.style.position = "absolute"; 

      // Esto es para que la figura se cree donde se haga el click
      figura.style.left = event.clientX - 50 + "px";
      figura.style.top = event.clientY - 50 + "px";
      padre.appendChild(figura);

      // Math Random para que la figura salga redonda o cuadrada
      let redonda = Math.floor(Math.random() * 2) + 1;
      if (redonda == 2) figura.style.borderRadius = "100%";
      // Cambiamos el color de la figura
      CambioColorFigura(figura,ccolores);

      // Hacemos que la figura siga al cursor
      padre.onmousemove = function (event) {
        figura.style.left = event.clientX - 50 + "px";
        figura.style.top = event.clientY - 50 + "px";
      };

      // Eliminar la figura al soltar el click
      padre.onmouseup = function () {
        padre.removeChild(figura);
        

        
      };
    }
  };
