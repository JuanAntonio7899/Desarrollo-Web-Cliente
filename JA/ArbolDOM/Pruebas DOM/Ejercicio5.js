function parrafillo() {

    let parr = document.getElementsByTagName("p")[0];
    if (parr.className == "uno") {
        parr.setAttribute("class","dos");
        
    } else {
        parr.setAttribute("class","uno");
    }
   
    
}