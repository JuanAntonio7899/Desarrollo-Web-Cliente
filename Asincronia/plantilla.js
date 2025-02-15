window.onload = function(){
    document.querySelector("button").addEventListener("click", function(){
        let salida = document.querySelector("personajes");
        const url = "https://dragonball-api.com/api/characters";
    
        fetch(url)
        .then(function(respuesta){
            if(!respuesta.ok)
                throw new Error("Error del Fetch: "+respuesta.status);
            //capturas la respuesta
            return respuesta.json();
        })
        .then(function(datos){
            //Capturamos y gestionamos los datos
            
        })
        .catch(function(error){
            alert("Problemas accediendo a la URL: " + error);
        })
    });
}