window.onload = function () {

    

     // Lo hago arriba para que se actualice el h1
     if(localStorage.getItem("libros") != null){
        let nuevosLibros = (localStorage.getItem("libros")).split("\n");
        console.log(nuevosLibros);
        console.log(localStorage.getItem("libros"));
        
        
        for (const libro of nuevosLibros) {
            
            if(library.push(JSON.parse(libro))){
                console.log("Libro añadido correctamente.");
            }else{
                console.log("Error al añadir el libro.");
            }
            
        }
        
      
     
    }

    const totalLibros = library.length;
    let texto = document.createTextNode("Hay " + totalLibros + " libros en la biblioteca.");
    // Cogemos la referencia al título de la página web
    let webTitulo = document.getElementsByTagName("h1")[0];
    let textoDiv = document.createElement("div");
    // Vamos acoplando los elementos
    textoDiv.appendChild(texto);
    webTitulo.appendChild(textoDiv);

    // Pasamos a la biblioteca. Vamos a mostrar todos los libros.


    // Guardamos el section dónde se van a guardar los libros.
    let webSection = document.getElementsByTagName("section")[0];
    // FOR-OF para recorrer el array "library"
    for (const libro of library) {
        // Creamos las variables que vamos usar
        let libraryArticle = document.createElement("article");
        let articleTitulo = document.createElement("h3");
        let articleImagen = document.createElement("img");
        // Añadimos la clase creada en el enunciado
        libraryArticle.classList = "presentacion";
        // Añadimos el título al article
        articleTitulo.appendChild(document.createTextNode(libro.title));
        // Establecemos el src de la imagen
        articleImagen.src = libro.cover;
        // Añadimos ambas al article
        libraryArticle.appendChild(articleTitulo);
        libraryArticle.appendChild(articleImagen);
        // Añadimos el article al section
        webSection.appendChild(libraryArticle);

        // Al hacer click en el article, se mande la información a mostrar.html. Lo hago dentro del FOR debido a que cada uno debe pasar su propia información.
        libraryArticle.addEventListener("click", function () {
            // Guardamos la info aquí.
            //JSON.stringify() transforma un objeto en una cadena con formto JSON
            localStorage.setItem("libro", JSON.stringify(libro));
            window.location.href = "mostrar.html";
        })
    }

    // Añadir nuevo libro
    let nuevoLibro = document.getElementsByTagName("a")[0];
    nuevoLibro.href = "nuevoLibro.html";

}

