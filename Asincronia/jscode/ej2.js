window.onload = function () {
    let boton = document.getElementsByTagName("input")[0];
    let url = "http://www.jaimeweb.es/medac/datos.json";

    boton.addEventListener("click", function () {
        fetch(url)
            .then(function (respuesta) {
                return respuesta.json();
            })
            .then(function (datos) {
                console.log(datos);
                datos.forEach(function (obj) {
                    console.log(obj);
                });
                datos.forEach(function (obj) {
                    for (let clave in obj) {
                        console.log(clave + ": " + obj[clave]);
                    }
                });
            });
    });
}
