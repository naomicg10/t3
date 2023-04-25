'use strict';

function hover(id){
    let cuadro=document.getElementById(id);
    cuadro.style.backgroundColor="rgb(63,63,63)";
}

function desmarcar(id){
    let cuadro=document.getElementById(id);
    cuadro.style.backgroundColor="rgb(236,236,236)";
}

function pintar(id){
    let cuadro=document.getElementById(id);
    cuadro.innerHTML="*";
}