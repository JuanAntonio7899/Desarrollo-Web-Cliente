let euros = 0;
let dolares = 0;

function ejercicio1() {

    do {
        euros = prompt("Introduce una cantidad en euros ");
   } while (euros<=0);
   
   dolares = euros*1.0965;
   
   alert(euros+" euros"+" equivalen a "+ dolares+" dolares americanos");
    
}

