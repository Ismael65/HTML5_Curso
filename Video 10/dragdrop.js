/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var elem_origen;
var elem_destino;
var codigo;


function comenzar(){
    elem_origen=document.getElementById("imagen");
    elem_origen.addEventListener("dragstart", comenzamos_arrastra, false);
    elem_destino=document.getElementById("zonadestino");
    /*elem_destino.addEventListener("dragenter", function (e) {
        e.preventDefault();}, false);*/
    elem_destino.addEventListener("dragover", function(e){
         e.preventDefault();}, false);
    elem_destino.addEventListener("drop", soltado, false);
    elem_origen.addEventListener("dragend", terminado, false);
    elem_destino.addEventListener("dragenter", entrando, false);
    elem_destino.addEventListener("dragleave", saliendo, false);

}
function comenzamos_arrastra(e){
    codigo="<img src'" + elem_origen.getAttribute("src") + "'>";
    e.dataTransfer.setData("Text",codigo);    
}
function soltado(e){
    e.preventDefault();
    elem_destino.innerHTML=e.dataTransfer.getData("Text");
}
function terminado(e){
    var elemento=e.target;
    elemento.style.visibility="hidden";
}
function entrando(e){
    e.preventDefault();
    elem_destino.style.background="rgba(8,252,25,0.8)";
}
function saliendo(e){
    e.preventDefault();
    elem_destino.style.background="#FFFFFF";
    /*elem_destino.style.visibility="hidden";*/
}
            
            window.addEventListener("load", comenzar, false);
