/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nuevaruta;

function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    var boton=document.getElementById("boton");
    boton.addEventListener("click", escribir_archivo, false);
   
    navigator.mozPersistentStorage.requestQuota(5*1024*1024, acceso); 
}
function acceso(){
    window.mozRequestFileSystem(PERSISTENT, 5*1024*1024, crearsis, errores);
    
}
function crearsis(sistema){
    espacio=sistema.root;
    /*ruta=ruta+nuevaruta + "/";
    mostrar();*/
    
}
function escribir_archivo(){
    var nombre=document.getElementById("archivo_origen").value;
    espacio.getFile(nombre, {create: true, exclusive: false}, function(entrada){
        entrada.createWriter(escribir_contenido, errores);
    }, errores);
}
function escribir_contenido(fileWriter){
    var texto=document.getElementById("texto").value;
    fileWriter.onwriteend=exito();
    var blob=new Blob([texto], {type: "text/html"});
    fileWriter.write(blob);
}
function exito(){
    document.getElementById("archico_origen").value="";
    document.getElementById("texto").value="";
    zonadatos.innerHTML="Archivo creado con exito";
    
}

function errores(e){
    alert("Ha habido un error: " + e.code);
 }





window.addEventListener("load", comenzar, false);