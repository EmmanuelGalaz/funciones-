let colorElegido="none";
const boxOne=document.querySelector("#boxOne");
const boxTwo=document.querySelector("#boxTwo");
const boxThree=document.querySelector("#boxThree");
const boxFour=document.querySelector("#boxFour");
const colorSeleccionado=document.querySelector("#colorSeleccionado");


document.addEventListener("keydown", function (event) {
  if (event.code === "KeyA") {
    colorElegido = "blue";
  } else if (event.code === "KeyS") {
    colorElegido = "gray";
  } else if (event.code === "KeyD") {
    colorElegido = "white";
  }
  console.log(colorElegido);
  colorSeleccion();
});


function colorSeleccion(){
    colorSeleccionado.style.backgroundColor=colorElegido;    
}


boxOne.addEventListener("click", ()=> (boxOne.style.backgroundColor=colorElegido));
boxTwo.addEventListener("click", ()=> (boxTwo.style.backgroundColor=colorElegido));
boxThree.addEventListener("click", ()=> (boxThree.style.backgroundColor=colorElegido));
boxFour.addEventListener("click", ()=> (boxFour.style.backgroundColor=colorElegido));