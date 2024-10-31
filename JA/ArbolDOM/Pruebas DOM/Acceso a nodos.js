window.onload = function () {
    let boton1 = document.getElementsByTagName("input")[0];
    let boton2 = document.querySelectorAll("input[type='button']")[1];
    let boton3 = document.getElementsByTagName("input")[2];

    boton1.onclick = function (){
        //1. Creamos el nodo
        let nuevo = document.createElement("p");
        //2. Atributos (opcional)
        nuevo.setAttribute("class","parra");
        //3. Creamos nodo de texto
        let texto = document.createTextNode("Soy el nuevo parrafo y me llamo Migue");
        //4. Engancho el nodo de texto al nuevo nodo
        nuevo.appendChild (texto);
        //5. Asignar un padre
        let papi = document.querySelector("section");
        //papi.appendChild(nuevo);
        let bro = document.querySelectorAll("div")[2];
        
        papi.insertBefore(nuevo,bro);

        this.disabled = true;


    }

    boton2.onclick = function () {

        let victima = document.getElementsByClassName("parra")[0];
        let papi = victima.parentNode;
        papi.removeChild(victima);


        
    }
    
    boton3.onclick = borrar;

    function borrar () {

        let papi = document.querySelector("section");

        let victimas = document.querySelectorAll("div");
        //
        let hijos = papi.children;
        for (let i = 0; i < victimas.length; i++) {
            let papi = victimas[i].parentNode;
            papi.removeChild(victimas[i]);
            
        }
    }
}