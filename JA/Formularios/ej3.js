/**
 * Crea un formulario con varios checkbox (pej, aficiones), un textarea y un boton.
 * Implementa un programa que, tras pulsar el boton se muestre dentro del textarea todas
 * las opciones marcadas.
 * 
 * b) Mejora el apartado anterior quitando el botón. Ahora cada vez que se marque un
 * checkbox, se añadirá al contenido del textarea. Si se desmarca, hay que quitarlo.
 */

window.onload = function(){

    

    // Guardo el formulario
    let formu = document.forms[0];
    let aficiones = [];
    
    for (let i = 0; i < formu.length; i++) {
        if (formu[i].type == "checkbox") {
            
            aficiones.push(formu[i]);
        }
    }
    
    // Guardo el textarea
    let textArea = document.querySelector("textarea");
    // Guardo el boton
    let boton = formu.elements[formu.length-1];

    // APARTADO A
    // boton.onclick = function(){
    //    
        
    //     let textito = "";
    //     for (let i = 0; i < aficiones.length; i++) {
    //         console.log("Entra for");
    //         if (aficiones[i].checked){
    //             console.log("Entra en checked");
    //             textito += aficiones[i].value+"\n";
    //         }
    //     }
    //     textArea.value = textito;
    // }

    // APARTADO B
    for (let i = 0; i < aficiones.length; i++) {
        aficiones[i].onclick = function(){
            if(aficiones[i].checked){
                textArea.value += aficiones[i].value+"\n";
            } else textArea.value = textArea.value.replace(aficiones[i].value+"\n","");
        }
    }
}