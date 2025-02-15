window.onload = function () {
    let divSalida = document.getElementById("salida");
    let urlGet = "http://www.jaimeweb.es/medac/getProfesores.php";
    let urlPost = "http://www.jaimeweb.es/medac/setProfesores.php";
    let obtener = document.getElementsByTagName("input")[0];
    let enviar = document.getElementsByTagName("input")[4];

    obtener.addEventListener("click", function () {
        fetch(urlGet)
            .then(function (respuesta) {
                return respuesta.json();
            })
            .then(function (datos) {
                while (divSalida.firstChild) {
                    divSalida.removeChild(divSalida.firstChild);
                }
                datos.forEach(function (profesor) {
                    let ficha = document.createElement("div");
                    ficha.classList.add("ficha");
                    let nombre = document.createElement("p");
                    let dni = document.createElement("p");
                    nombre.textContent = profesor.nombre;
                    dni.textContent = profesor.dni;
                    ficha.appendChild(nombre);
                    ficha.appendChild(dni);
                    divSalida.appendChild(ficha);
                });
            });
    });

    enviar.addEventListener("click", function () {
        let formData = new FormData(document.querySelector("form"));
        fetch(urlPost, { method: "POST", body: formData })
            .then(function (respuesta) {
                return respuesta.text();
            })
            .then(function (texto) {
                divSalida.textContent = texto;
            });
    });
}