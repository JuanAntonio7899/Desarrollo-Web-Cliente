window.onload = function() {
   

    let formu = document.querySelector("form");

    let texto1 = formu.elements[0];

    let texto2 = formu.elements[1];

    let copiar = formu.elements[2];
    
    copiar.onclick = function(){

        texto2.value = texto1.value;
        texto1.value = "";

    }
    
}