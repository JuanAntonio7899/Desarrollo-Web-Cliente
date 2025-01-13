/*
Crea un formulario con los siguientes campos:
• DNI: 8 números y una letra.
• Nombre: uno o dos nombres.
• Apellidos: uno o dos apellidos.
• Fecha de nacimiento: formato dd/mm/yyyy.
• Web personal: formato https://www.algo.tresletras
• Contraseña: entre 8 y 12 caracteres.
• Un botón para resetear el formulario.
• Un botón para enviar el formulario.
Haciendo uso de JavaScript pero sin usar expresiones regulares1, cuando se pulse el
botón correspondiente, valida el formulario siguiendo las normas que se detallan a
continuación y envía el resultado a otra página que muestre un mensaje de que todo ha
salido bien.
El formulario estará correcto sí y solo sí:
• Ningún campo se queda vacío
• El DNI tiene una longitud de 9
• La fecha de nacimiento tiene el formato correcto.
• Hay una o dos palabras en los campos nombre y apellidos.
• El campo de la web debe empezar por https://
• La longitud de la contraseña es correcta.
Si algún campo se rellena de forma errónea, debe indicarse ese error usando un alert y
devolviendo el foco al elemento erróneo (o al primer elemento erróneo).
Como se ha comentado antes, debes preparar una sencilla pagina html con un mensaje
de que todo ha ido bien y enlazarla al formulario de tal modo que aparezca cuando todos
los campos sean correctos.

MEJORAS:
Poner lo típico de mostrar contraseña o no con la mini imagen del ojito
*/

window.onload = function() {

    let dni = document.getElementById("dni");
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let fnacimiento = document.getElementById("fnacimiento");
    let password = document.getElementById("contra");
    let webp = document.getElementById("webp");
    let submit = document.querySelector('button[type="submit"]');
    let reset = document.querySelector('button[type="reset"]');

    submit.addEventListener("click", function(e) {
        e.preventDefault();

        let error = 0;

        let val_dni = validar_dni(dni.value);
        if (val_dni !== true) {
            console.log(val_dni);
            dni.focus();
            error++;
            return;
        }

        let val_nombre = validar_nombre_apellido(nombre.value, "nombre");
        if (val_nombre !== true) {
            console.log(val_nombre);
            nombre.focus();
            error++;
            return;
        }
            
        let val_apellido = validar_nombre_apellido(apellidos.value, "apellido");
        if (val_apellido !== true) {
            console.log(val_apellido);
            apellidos.focus();
            error++;
            return;
        }
            
        let val_fnacimiento = validar_fecha(fnacimiento.value);
        if (val_fnacimiento !== true) {
            console.log(val_fnacimiento);
            fnacimiento.focus();
            error++;
            return;
        }

        let val_webp = validar_web(webp.value);
        if (val_webp !== true) {
            alert(val_webp);
            webp.focus();
            error++;
            return;
        }

        let val_password = validar_password(password.value);
        if (val_password !== true) {
            alert(val_password);
            password.focus();
            error++;
            return;
        }

        if (error === 0) {
            // enviar formulario
        }
    });
}

function validar_dni(dni) {

    if (dni === "")
        return "El DNI es obligatorio";

    if (dni.length != 9)
        return "El DNI debe tener 9 caracteres.";

    let i = 0;
    while (is_number(dni.charAt(i)) && i < 8)
        i++;
    if (i != 8)
        return "Los primeros 8 caracteres deben ser números.";

    if (!is_alpha(dni.charAt(i)))
        return "El último caracter debe ser una letra.";

    return true;
}

function validar_nombre_apellido(nombre, tipo) {

    if (nombre === "")
        return `El ${tipo} es obligatorio.`;

    if (count_words(nombre) > 2)
        return `Solo se admiten hasta dos ${tipo}s.`;

    let i = 0;
    while ((is_alpha(nombre.charAt(i)) || nombre.charAt(i) == " ") && i < nombre.length)
        i++;
    if (i != nombre.length)
        `Solo de admiten letras como parte del ${tipo}.`

    return true;
}

function validar_fecha(fecha) {

    if (fecha === "")
        return "La fecha es obligatoria.";

    let arr_fecha = fecha.split("/");
    if (arr_fecha.length != 3)
        return "La fecha debe contener día, mes y año separados por '/'.";

    if (!is_number(arr_fecha[0]) || arr_fecha[0] < 1 || arr_fecha[0] > 31)
        return "El día introducido no es válido.";

    if (!is_number(arr_fecha[1]) || arr_fecha[1] < 1 || arr_fecha[1] > 12)
        return "El mes introducido no es válido.";

    if (!is_number(arr_fecha[2]) || arr_fecha[2] < 1800 || arr_fecha[2] > new Date().getFullYear())
        return "El año introducido no es válido.";

    return true;
}

function validar_password(password) {
    if (password === "")
        return "La contraseña es obligatoria.";

    if (password.length < 8 || password.length > 12)
        return "La contraseña debe tener entre 8 y 12 caracteres.";

    return true;
}

function validar_web(web) {
    if (web === "")
        return "La web es obligatoria.";

    if (!web.startsWith("https://"))
        return "La web debe empezar por 'https://'.";

    if (web.split(".").length < 2)
        return "La web debe tener un dominio.";

    return true;
}

function is_number(char) {

    return (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57);
}

function is_alpha(char) {

    return ((char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122));
}

function count_words(str) {

    let i = 0;
    let words = 0;

    while (i < str.length - 1) {
        i++;
        if (str[i] === " " && str[i - 1] !== " " && str[i + 1] !== " ")
            words++;
    }

    return (words + 1);
}