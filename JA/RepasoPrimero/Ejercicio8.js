function countBy(x, y) {
  
    if (x <= 0 || y <= 0) {
      return [];
    }
    
    
    let lista = [ ];
    let i = 0;

    lista[i] = 1;
    
    for (let i = 1; i < y; i++) {
      lista[i] = x * i;
    }
    
    return lista;
  }
  
  
  console.log(countBy(3, 5));   
  console.log(countBy(-3, 5));  