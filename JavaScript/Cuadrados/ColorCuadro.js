'use strict';
// nos ayuda a no dejar pasar nungún error
// Programa que solamente define funciones que son invocadas e inicializadas de forma global


//defino variables globales
var color = 'white';

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

obtenerColor();