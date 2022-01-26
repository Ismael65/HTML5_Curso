/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nuevaruta;

function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    var boton=document.getElementById("boton");
    boton.addEventListener("click", modificar, false);
   
    navigator.mozPersistentStorage.requestQuota(5*1024*1024, acceso); 
}
function acceso(){
    window.mozRequestFileSystem(PERSISTENT, 5*1024*1024, crearsis, errores);
    
}
function crearsis(sistema){
    espacio=sistema.root;
    ruta=ruta+nuevaruta + "/";
    mostrar();
    
}
function modificar(){
    var origen=document.getElementById("archivo_origen").value;
    var destino=document.getElementById("directorio_destino").value;
    
    espacio.getFile(origen, null, function(archivo){
        espacio.getDirectory(destino, null, function(directorio){
            archivo.moveTo(directorio, null, exito, errores);
        }, errores);
    },errores);
}
function exito(){
    document.getElementById("archivo_origen").value="";
    document.getElementById("directorio_destino").value="";
    mostrar();
}

/*function crear(){
    var nombre_archivo=document.getElementById("entrada").value;
    if(nombre_archivo!==""){
        nombre_archivo= ruta + nombre_archivo;
        espacio.getFile(nombre_archivo, {create:true, exclusive:false}, mostrar, errores);
        }
}*/
function mostrar(){
    document.getElementById("archivo_origen").value="";
    zonadatos.innerHTML="";
    espacio.getDirectorie(ruta, null, leerdir, errores);
}
function leerdir(dir){
    lector=dir.createReader();
    leer();
    
}
function leer(){
    lector.readEntries(function(archivos){
        if(archivos.length){
            listar(archivos);
        }
    }, errores);
}
function listar(archivos){
    for(var i=0; i<archivos.length; i++){
        if(archivos[i].isFile){
            zonadatos.innerHTML+=archivos[i].name+"<br";
         }else if(archivos[i].isDirectory){
            zonadatos.innrerHTML+="<span class='directorio'>"  + archivos[i].name + "</span><br>";
         }
     }
}
function volver(){
    espacio.getDirectory(ruta, null, function(dir_actual){
        dir_actual.getParent(function(dir_padre){
            ruta=dir_padre.fullPath;
                mostrar();
        },errores);
    }, errores);
}

function errores(e){
    alert("Ha habido un error: " + e.code);
 }



/*
function crear(){
    var nombre_archivo=document.getElementById("entrada").value;
    if(nombre_archivo!=""){
        espacio.getFile(nombre_archivo, {create:true, exclusive:false}, mostrar, errores);
        
    }
}
function mostrar(entrada){
    document.getElementById("entrada").value="";
    zonadatos.innerHTML="Exito en la creacion de espacio y archivo! <br>";
    zonadatos.innerHTML+="Nombre: " + entrada.name + "<br>";
    zonadatos.innerHTML+="Ruta: " + entrada.fullPath + "<br>";
    
}
function errores(e){
    alert("Ha habido un error: " + e.code);
    
}
*/

window.addEventListener("load", comenzar, false);