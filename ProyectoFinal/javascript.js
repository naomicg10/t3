'use strict'
/* JavaScript Ta-te-ti */
function oscuro(identificador) {
    let cuadrado = document.getElementById(identificador);
    cuadrado.style.backgroundColor = "red";

}

function Quitar(identificador) {
    let cuadrado = document.getElementById(identificador);
    cuadrado.style.backgroundColor = "";
}

let turno = 1;
let tablero = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
let jugadorActual = 'o';
let contadorTurnos = 0;

function simbolo(identificador) {
    let cuadrado = document.getElementById(identificador);
    if (cuadrado.innerHTML == '') {
        cuadrado.innerHTML = jugadorActual;
        cuadrado.style.fontSize = "3em";
        contadorTurnos++;
        if (ganador()) {
            alert('GANO: ' + jugadorActual);
            reiniciarJuego();
        } else if (contadorTurnos === 9) {
            alert('EMPATE');
            reiniciarJuego();
        } else {
            jugadorActual = jugadorActual === 'x' ? 'o' : 'x';
        }
    }
}

function ganador() {
    let simbolo;
    for (let i = 1; i <= 3; i++) {
        simbolo = document.getElementById('c' + i + '1').innerHTML;
        if (simbolo !== '' &&
            simbolo === document.getElementById('c' + i + '2').innerHTML &&
            simbolo === document.getElementById('c' + i + '3').innerHTML) {
            return true;
        }
    }
    for (let i = 1; i <= 3; i++) {
        simbolo = document.getElementById('c1' + i).innerHTML;
        if (simbolo !== '' &&
            simbolo === document.getElementById('c2' + i).innerHTML &&
            simbolo === document.getElementById('c3' + i).innerHTML) {
            return true;
        }
    }
    simbolo = document.getElementById('c11').innerHTML;
    if (simbolo !== '' &&
        simbolo === document.getElementById('c22').innerHTML &&
        simbolo === document.getElementById('c33').innerHTML) {
        return true;
    }
    simbolo = document.getElementById('c13').innerHTML;
    if (simbolo !== '' &&
        simbolo === document.getElementById('c22').innerHTML &&
        simbolo === document.getElementById('c31').innerHTML) {
        return true;
    }
    return false;
}

function reiniciarJuego() {
    jugadorActual = 'x';
    contadorTurnos = 0;
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            let cuadrado = document.getElementById('c' + i + j);
            cuadrado.innerHTML = '';
            cuadrado.style.fontSize = "";
            cuadrado.style.backgroundColor = "";
        }
    }
}

/* JavaScript Ajustes */
function cambiarFuente() {
    listValue = localStorage.getItem('fuente');
    document.body.style.fontFamily = listValue;
}

function mostrarTextoAlmacenado() {
    var textoAlmacenado = sessionStorage.getItem('texto') || 'sin identificar';
    var textoMostrado = document.getElementById('texto-mostrado');
    textoMostrado.textContent = textoAlmacenado;
}

function almacenarEnSessionStorage() {
    var textoInput = document.getElementById('texto-input').value;
    sessionStorage.setItem('texto', textoInput);
    alert('¡Bienvenidx ' + textoInput + '!');
}

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    document.getElementById("nombre").value = "";

    // Deshabilita el formulario
    document.getElementById("nombre").disabled = true;
    document.querySelector("#formulario button[type='submit']").disabled = true;

    var nombreDiv = document.createElement("div");
    nombreDiv.textContent = '¡Bienvenidx, ' + nombre + '!';
    document.getElementById("nombre-registrado").appendChild(nombreDiv);
});

function aplicarCambios() {
    var color = document.getElementById("colorInput").value;
    var font = document.getElementById("fontSelect").value;

    localStorage.setItem("color", color);
    localStorage.setItem("font", font);

    aplicarEstilos(color, font);
}

function aplicarEstilos(color, font) {
    var body = document.body;

    body.style.color = color;
    body.style.fontFamily = font;
}