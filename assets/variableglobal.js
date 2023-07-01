let divazul = document.querySelector("#azul");
let divrojo = document.querySelector("#rojo");
let divverde = document.querySelector("#verde");
let divamarillo = document.querySelector("#amarillo");
let divkey = docimen.querySelector("#key");

let changecolor = (color) => {
  color.target.style.color = "red";
};

divazul.addEventListener("click", changecolor);
