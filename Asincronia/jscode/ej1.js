window.onload = function () {
    const url = "https://randomuser.me/api";
    let botonA = document.getElementsByTagName("input")[0];
    let botonB = document.getElementsByTagName("input")[1];
    let contenedor = document.querySelector("section div");

    botonA.addEventListener("click", function () {
        fetch(url)
            .then(function (respuesta) {
                return respuesta.json();
            })
            .then(function (datos) {
                console.log(datos);
            });
    });



    botonB.addEventListener("click", function () {
        fetch(url)
            .then(function (respuesta) {
                return respuesta.json();
            })
            .then(function (datos) {
                let usuario = datos.results[0];
                let article = document.createElement("article");
                article.classList.add("usuario");
                article.textContent = usuario.name.first + " " + usuario.name.last + ": " + usuario.dob.age + " años";
                let img = document.createElement("img");
                img.src = usuario.picture.medium;
                article.appendChild(img);
                contenedor.appendChild(article);
            });
    });
}



   