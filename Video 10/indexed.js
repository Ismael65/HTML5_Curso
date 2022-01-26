/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var bd;
var indexedDB;

function iniciar(){
    zonadatos=document.getElementById("zonadatos");
    boton=document.getElementById("grabar");
    boton.addEventListener("click", agregarobjeto, false);
    var solicitud=indexedDB.open("mibase2");
    solicitud.onsuccess=function(e){
        bd=e.target.result; };
    solicitud.onupgradeneeded=function(e){
        bd=e.target.result;
        bd=e.createObjectStore("gente", (keyPath:"clave")); };
}
function agregarobjeto() {
    var clave=document.getElementById("clave").value;
    var titulo=document.getElementById("texto").value;
    var Fecha=document.getElementById("fecha").value;
    var transaccion=bd.transaction(["gente"], "readwrite");
    var almacen=transaccion.objectStore("gente");
    var agregar=almacen.add({clave: clave, titulo: titulo, Fecha: Fecha});
    document.getElementById("clave").value="";
    document.getElementById("texto").value="";
    document.getElementById("fecha").value="";
    
}


window.addEventListener("load", iniciar, false);
