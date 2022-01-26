/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var miaudio, reproducir, barra, progreso, maximo, ratonX, nuevoTiempo;
maximo = 600;

function comenzar() {
    miaudio = document.getElementById("miaudio");
    reproducir = document.getElementById("Play");
    barra = document.getElementById("barra");
    progreso = document.getElementById("progreso");

    reproducir.addEventListener("click", clicando, false);

    barra.addEventListener("click", adelantando, false);

}

function clicando() {
    if ((miaudio.paused === false) && (miaudio.ended === false)) {
        miaudio.paused();
        reproducir.innerHTML = "play";

    } else {
        miaudio.play();
        reproducir.innerHTML = "paused";
        bucle = setInterval(estado, 300);
    }
}

function estado() {
    if (miaudio.ended === false) {
        var total = parseInt(miaudio.currentTime * maximo / miaudio.duration);
        progreso.style.width = total + "px";
    }
}

function adelantando(posicion) {
    if ((miaudio.paused === false) && (miaudio.ended) === false) {
        var ratonX = posicion.pagex - barra.offsetLeft;
        var nuevoTiempo = ratonX * miaudio.duration / maximo;
        miaudio.currentTime = nuevoTiempo;
        progreso.style.width = ratonX + "px";

    } 
}




window.addEventListener("load", comenzar, false);