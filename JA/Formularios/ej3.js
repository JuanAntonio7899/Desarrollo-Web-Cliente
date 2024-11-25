window.onload = function ()  {
    let formu = document.querySelector("form");
    let furbito = formu.elements[0];
    let cine = formu.elements[1];
    let jueguitos = formu.elements[2]; 

    let etiquetas = document.querySelectorAll("label");

   

    let texto = formu.elements[3];
    let boton = formu.elements[4];

    boton.onclick = function () {
        for (const eti of etiquetas) {

            if (furbito.checked == true) {

                texto.value = eti.textContent;
                
            }else if (cine.checked == true){
                texto.value += " " + eti.textContent;
    
            }else{
                texto.value += " " + eti.textContent;
            }
        
        
        }

        
    }
    
    
}