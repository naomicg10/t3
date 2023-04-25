'use strict';
// nos ayuda a no dejar pasar nungún error
// Programa que solamente define funciones que son invocadas e inicializadas de forma global


//defino variables globales
var color = 'white';

// trabajamos con arrays
//var colorFr= ['rgba(132, 0, 255, 0.438)','rgba(33, 0, 37, 0.438)','rgba(255, 230, 0, 0.438)','rgba(4, 0, 255, 0.438)','rgba(231, 112, 255, 0.603)']
var colorFr= new Array ['rgba(132, 0, 255, 0.438)','rgba(33, 0, 37, 0.438)','rgba(255, 230, 0, 0.438)','rgba(4, 0, 255, 0.438)','rgba(231, 112, 255, 0.603)']
var colorFn= [];
colorFn[0]= 'magenta';
colorFn[1]= 'blue';
colorFn[2]= 'black';
colorFn[3]= 'yellow';
colorFn[4]= 'red';

function pinturaInicial () {
    for (i=0; i< 5 ; i++){
    let identificador="c"+(i+1);
    let elemento=document.getElementById(identificador);
    elemento.style.barkgroundColor=colorFn[i];
    elemento.style.color=colorFr[i];
    }
}

// pedimos solamente el color

function eligeColor() {
    color = prompt("Diga en qué color quiere el salludo (rojo, azul, amarillo)", "");
    switch (color) {
        case 'rojo':
            color = 'red';
            break;
        case 'azul':
            color = 'blue';
            break;
        case 'amarillo':
            color = 'yellow';
            break;
        default:
            color = 'black'; // lo pongo en negro para saber que es un color erróneo
            break;
    }
}


function obtenerColor(identificador) {
    let id = "c" + identificador;
    let cuadro = document.getElementById(id);
    color = getComputedStyle(cuadro).backgroundColor;  // para sacar los colores que se le asignó al cuadro en el css
    console.log(color);
}

// para poner color a la palabra de dentro del cuadrado
function saludar(identificador) {
    let id = "c" + identificador;
    let cuadro = document.getElementById(id);
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA";
}

pinturaInicial();