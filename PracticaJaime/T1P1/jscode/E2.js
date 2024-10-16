function ejercicio2() {
  let notas = "";
  let suspensos = 0;
  let aprobados = 0;
  let notables = 0;
  let sobresalientes = 0;
  let notasSeparadas;

  for (let i = 0; i < 10; i++) {
     var num = prompt("Introduce 10 notas");
     while (num<0||num>10) {
        num=prompt("Introduce notas validas");
        
     }

     notas +=`${num}`;

    

    

  }
  notasSeparadas=notas.split("");

    
 if (notasSeparadas>=5&&notasSeparadas<=6) {
    aprobados++;
    
  }else if (notasSeparadas>=7&&notasSeparadas<=8) {
    notables++;
    
  }else if (notasSeparadas>9) {
    sobresalientes++;
    
  }else{
    suspensos++;
  }
 alert("hay "+ suspensos + " suspensos "+ aprobados +" aprobados "+  notables +" notables"+ sobresalientes+ " sobresalientes");
  
    
}
