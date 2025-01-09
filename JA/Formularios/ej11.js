window.onload = function () {
  let formu = document.forms[0];

  let dni = formu.elements[0];
  let nombre = formu.elements[1];
  let apellidos = formu.elements[2];
  let fecha = formu.elements[3];
  let web = formu.elements[4];
  let contrasena = formu.elements[5];
  let reset = formu.elements[6];
  let enviar = formu.elements[7];

  //Creamos el div del error
  crearWarning();

  reset.addEventListener("click", function () {
    dni.value = "";
    nombre.value = "";
    apellidos.value = "";
    fecha.value = "";
    web.value = "";
    contrasena.value = "";
  });

  enviar.addEventListener("click", function () {
    event.preventDefault();

    //Validamos el dni
    if (dni.value == "") {
      Crearerror("Este campo no puede estar vacio!!");
      dni.focus();
    } else if (dni.value.lenght != 9) {
      Crearerror(
        "Error, la longitud del dni no puede ser ni mayor ni inferior a 9"
      );
      dni.focus();
    } else {
      var dni = true;
    }

    //Validamos el nombre

    if (nombre.value == "") {
      Crearerror("Este campo no puede estar vacio!!");
      nombre.focus();
    } else if (splitcadena(nombre.value) > 2) {
      Crearerror("No puedes tener mas de 2 nombres!!");
      nombre.focus();
    } else {
      var nombre = true;
    }

    if (apellidos.value == "") {
      Crearerror("Este campo no puede estar vacio!!");
      apellidos.focus();
    } else if (splitcadena(apellidos.value) > 2) {
      Crearerror("No puedes tener mas de 2 apellidos!!");
      apellidos.focus();
    } else {
      var nombre = true;
    }

    if (web.value == "") {
      Crearerror("Este campo no puede estar vacio!!");
      web.focus();
    } else {
      if (web.value.substring(0, 8) != "https://") {

        warning("Web: formato incorrecto (https://...");
        web.focus();
      
      } else {
        var web = true;
      }
    }


    if (contrasena.value == "") {
      Crearerror("Este campo no puede estar vacio!!");
      contrasena.focus();

      
    }else if (contrasena.value.lenght < 8 || contrasena.value.lenght > 12) {
      Crearerror("La contraseña debe tener entre 8 y 12 caracteres")

      contrasena.focus();
      
    }else{
      var contrasena  = true
    }

    if (dni && nombre && apellidos && fecha && web && contrasena){
      window.location.href = "./correcto.html";
  }


  });

  function Crearerror(error) {
    // Añado el error
    let error_div = document.createElement("div");
    let texto = document.createTextNode(error);
    error_div.appendChild(texto);
    document.getElementsByClassName("warning")[0].appendChild(error_div);
  }
  function crearWarning() {
    // En caso de que esté creato ya el div, se borra para reset
    if (document.getElementsByClassName("warning")[0] != null) {
      document.body.removeChild(document.getElementsByClassName("warning")[0]);
    }
    // Creo el div warning
    var warning = document.createElement("div");
    warning.classList = "warning";
    document.querySelector("body").appendChild(warning);
  }

  function splitcadena(cadena) {
    let cadenaSplit = cadena.split(" ");
    return cadenaSplit.length;
  }
};
