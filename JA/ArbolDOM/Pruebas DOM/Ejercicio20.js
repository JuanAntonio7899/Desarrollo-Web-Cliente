window.onload = function(){
    let parra = document.getElementsByTagName("p")[0];
    let boton1 = document.getElementsByTagName("button")[0];
    let boton2 = document.getElementsByTagName("button")[1];
    let boton3 = document.getElementsByTagName("button")[2];

    boton1.onclick = function(){
        let nuevo = document.createElement("p");
        let texto = document.createTextNode(parra.innerText) ;
        nuevo.appendChild (texto);
        let padre = document.querySelector("div");
        nuevo.setAttribute("class","kami");
        padre.insertBefore(nuevo,parra);

    }

}