window.onload = function (){
    let formu = document.querySelector("form");

    let texto1 = formu.elements[0];

    let texto2 = formu.elements[1];

    texto1.onkeydown = function(){
        texto2.value = texto1.value;
    }

    texto1.onkeyup = function(){
        texto2.value = texto1.value;
    }
}