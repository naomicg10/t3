'use strict';

var f, y;
var a, n = 3;
var piramide = "--o--<br/>-ooo-<br/>ooooo";

do {
    var cuadro = prompt("Diga que cuadro quiere saludar (1-5)", "");
    cuadro = parseInt(cuadro);
} while (cuadro > 5 || cuadro < 0);

do {
    var cuadro2 = prompt("Diga que color quiere (a,b,c)", "");

} while (!cuadro2 == "a" || !cuadro2 == "b" || !cuadro2 == "c");


var selector = "c" + cuadro;

var estecuadro = document.getElementById(selector);

estecuadro.innerHTML = piramide;

if (cuadro2 == "a") {
    estecuadro.style.color = "red";
} else if (cuadro2 == "b") {

    estecuadro.style.color = "blue";
} else if (cuadro2 == "c") {

    estecuadro.style.color = "green";
}
function imprimir() {
    document.write("<br>")


    for (let i = 0; i <= n; i++) {

        for (let j = 0; j <= n - i; j++) {
            document.write(' ');


        }

        for (let k = 0; k < 2 * i - 1; k++) {
            document.write("*");

        }
        document.write("<br>")
        for (y = 1; y <= 12 - i; y++) {
            document.write(" &nbsp;");
        }

    }

}
