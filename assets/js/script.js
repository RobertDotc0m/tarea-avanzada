// function pintar() {
// ele = document.getElementById("ele1");
// ele.style.backgroundColor = "yellow";
// }
// ele = document.getElementById("ele1");
// ele.addEventListener("click", pintar);//

function pintar(elemento) {
  elemento.style.backgroundColor = "yellow";
}

let ele = document.getElementById("ele1");
ele.style.backgroundColor = "green";

ele.addEventListener("click", function () {
  pintar(ele);
});
