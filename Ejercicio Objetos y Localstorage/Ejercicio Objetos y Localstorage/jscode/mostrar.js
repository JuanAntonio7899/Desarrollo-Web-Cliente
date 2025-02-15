window.onload = function(){
    // Traemos del main.js los datosss (cadena con formato json) y lo transformamos en objeto.
    let libros = JSON.parse(localStorage.getItem('libro'));
    // console.log(libros);
    
    // Creamos el título.
    let h2 = document.createElement("h2");
    // .innerHTML SUSPENDE JAIME
    h2.textContent = libros.title;
    let section = document.getElementsByTagName("section")[0];
    section.appendChild(h2);

    // Empezamos con la tabla.
    let tabla = document.createElement("table");
    // FORMA DE HACERLO CON BUCLE

    for (const datos in libros) {
        if(datos!="title" && datos!="cover"){
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            td1.appendChild(document.createTextNode(datos));
            if(datos=="author"){
                console.log(datos.name); // undefined
                console.log(libros.author.name); // sale correctamente
                td2.appendChild(document.createTextNode(libros.author.name))
            } else td2.appendChild(document.createTextNode(libros[datos]));
            tr.appendChild(td1);
            tr.appendChild(td2);
            tabla.appendChild(tr);
        }
    }
    section.appendChild(tabla);

    // Añadimos la foto y le ponemos que sea clase "portada"
    let portada = document.createElement("img");
    portada.className = "portada";
    portada.src = libros.cover;
    section.appendChild(portada);

    // Hacemos útil el botón para volver a inicio.html
    let volver = document.getElementsByTagName("a")[0];
    volver.addEventListener("click",function(){
        volver.href = "inicio.html";
    })
}