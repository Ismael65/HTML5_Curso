/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    zonaprogreso=document.getElementById("zonaprogreso");
    var boton=document.getElementById("boton");
    boton.addEventListener("click", leer, false);
    
}
function leer(){
    var url="video-2012-04-05-14-22-32.mp4";
    var solicitud= new XMLHttpRequest();
    solicitud.addEventListener("loadstart", comienza_barra, false);
    solicitud.addEventListener("progress", estado_barra, false);
    solicitud.addEventListener("load", mostrar, false);
    solicitud.open("GET", url, true);
    solicitud.send(null);
    
}
function comienza_barra(){
    zonadatos.innrerHTML="<progress value='0' max='100'></progress>";
}
function estado_barra(e){
    var porcentaje=parseInt(e.loaded/e.total)*100;
    var barraprogreso=zonadatos.querySelector("progress");
    barraprogreso.value=porcentaje;
    zonaprogreso.innerHTML=porcentaje + " % ";
    
}
function mostrar(e){
    zonadatos.innerHTML="Archivo leido !!!";
    
}



window.addEventListener("load", comenzar, false);