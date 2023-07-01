let divazul = document.getElementById("azul");
let divrojo = document.querySelector("#rojo");
let divverde = document.querySelector("#verde");
let divamarillo = document.querySelector("#amarillo");
let divkey = document.querySelector("#key");

let changecolor = (color) => {
  color.target.style.backgroundColor = "black";
};

divazul.addEventListener("click", changecolor);
divrojo.addEventListener("click", changecolor);
divverde.addEventListener("click", changecolor);
divamarillo.addEventListener("click", changecolor);

function creatediv(color) {
  let diiv = document.createElement("div");
  diiv.style.width = "200px";
  diiv.style.height = "200px";

  let nuevotex = document.createTextNode("hi");
  diiv.appendChild(nuevotex);
  diiv.style.backgroundColor = color;
  document.body.appendChild(diiv);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    azul.style.backgroundColor = "pink";
  } else if (event.key === "s") {
    divrojo.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    divverde.style.backgroundColor = "aqua";
  } else if (event.key === "q") {
    creatediv("skyblue");
  } else if (event.key === "w") {
    creatediv("orange");
  } else if (event.key === "e") {
    creatediv("brown");
  }
});
