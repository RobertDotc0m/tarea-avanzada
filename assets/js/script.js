// function pintar() {
// ele = document.getElementById("ele1");
// ele.style.backgroundColor = "yellow";
// }
// ele = document.getElementById("ele1");
// ele.addEventListener("click", pintar);//
let ele = document.getElementById("ele1");
ele.style.backgroundColor = "green";

function pintar(elemento) {
  elemento.style.backgroundColor = "yellow";
}

ele.addEventListener("click", function () {
  pintar(ele);
});
