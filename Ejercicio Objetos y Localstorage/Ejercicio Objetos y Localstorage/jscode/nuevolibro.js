document.addEventListener("DOMContentLoaded",function () {
    

    // Corrijo el funcionamiento de los botones
    let botones = document.querySelectorAll("input[type='button']");
    let insertar = botones[0];
    let cancelar = botones[1];
    insertar.addEventListener("click",function(){
        // No hace falta validar
        let titulo = document.getElementsByName("titulo")[0].value;        
        let isbn = document.getElementsByName("isbn")[0].value;
        let paginas = document.getElementsByName("numpaginas")[0].value;
        let genero = document.getElementsByName("genero")[0].value;
        let anio = document.querySelector("input[name='anio']").value;
        let cover = document.querySelector("input[name='cover']").value;
        let autor = document.querySelector("input[name='autor']").value;
        let sinopsis = document.getElementsByName("resumen")[0].value;

        // Creo un objeto libro
        let libro = {
            title: titulo,
            pages: paginas,
            genre: genero,
            cover: cover,
            synopsis: sinopsis,
            year: anio,
            isbn: isbn,
            author: {
                name: autor,
                otherBooks: []
            }
        }

        // Guardo el libro para enviarlo
        if (localStorage.getItem("libros")!= null) {
            localStorage.setItem("libros",localStorage.getItem("libros") + "\n" + JSON.stringify(libro));

            
        }else{
            localStorage.setItem("libros" , JSON.stringify(libro));

        }

        
        // Necesito tocar el formulario desde JS
        let formulario = document.getElementById("formu");
        formulario.setAttribute("method","get");
        formulario.setAttribute("action","inicio.html");
        formulario.submit();
    

    });
    cancelar.addEventListener("click",function(){
        // Volver a inicio
        window.location.href = "inicio.html";
    })

})
