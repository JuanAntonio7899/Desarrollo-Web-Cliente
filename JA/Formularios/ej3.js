window.onload = function () {
    var formu = document.querySelector("form");
    var checkboxes = formu.querySelectorAll('input[type="checkbox"]');
    var etiquetas = document.querySelectorAll("label");
    var texto = formu.querySelector("textarea");
    var boton = formu.querySelector("button");

    boton.onclick = function () {
        // Reiniciar el contenido del textarea
        texto.value = "";

        // Usar for...of para recorrer checkboxes y etiquetas simultáneamente
        for (var checkbox of checkboxes) {
            if (checkbox.checked) {
                // Buscar la etiqueta asociada al checkbox
                for (var etiqueta of etiquetas) {
                    if (etiqueta.contains(checkbox)) {
                        texto.value += etiqueta.textContent + "\n";
                    }
                }
            }
        }
    };
};
