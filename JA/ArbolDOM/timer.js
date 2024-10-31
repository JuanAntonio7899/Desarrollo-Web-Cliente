function guille() {
  console.log("soy Antiñolo");
}

window.onload = function () {
  let frase = "";
  let contador = 0;
  let dedo = document.querySelector("div");
  let timer = setInterval(function () {
    frase += contador+",";
  }, 1000);
};
