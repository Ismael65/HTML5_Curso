/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    var boton=document.getElementById("boton");
    boton.addEventListener("click", enviar, false);
    trabajador=new Worker("trabajador.js");
    trabajador.addEventListener("message", recibido, false);
}
function enviar(){
    var nombre=document.getElementById("nombre").value;
    trabajador.postMessage(nombre);
}
function recibido(e){
    zonadatos.innerHTML=e.data;
}

window.addEventListener("load", comenzar, false);
