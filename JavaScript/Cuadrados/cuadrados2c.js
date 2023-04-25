'use strict';

var cuadro = prompt("Diga en qué cuadro quiere saludar (1 a 5)","");
cuadro = parseInt(cuadro);

var estecuadro = "";
switch(cuadro){
    case 1:
        estecuadro = document.getElementById("c1");
        break;
    case 2:
        estecuadro = document.getElementById("c2");
        break;
    case 3:
        estecuadro = document.getElementById("c3");
        break;
    case 4:
        estecuadro = document.getElementById("c4");
        break;
    case 5:
        estecuadro = document.getElementById("c5");
        break;
    default:
        alert ("mal numero has ingresado");
        exit(-1);
}
if(estecuadro!=""){
   estecuadro.innerHTML = "HOLA";
   estecuadro.style.color = "blue";
}