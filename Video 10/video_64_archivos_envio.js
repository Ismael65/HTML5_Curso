/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    
    var boton=document.getElementById("boton");
    boton.addEventListener("click", enviar_datos, false);
    
}
function enviar_datos(){
    el_nombre=document.getElementById("elnombre").value;
    el_apellido=document.getElementById("elapellido").value;
    var datos=new FormData();
    datos.append("nombre", el_nombre);
    datos.append("apellido", el_apellido);
    var url="procesar.php";
    var solicitud=new XMLHttpRequest();
    solicitud.addEventListener("load", mostrar, false);
    solicitud.open("POST", url, true);
    solicitud.send(datos);
    
}

function mostrar(e){
    zonadatos.innerHTML=e.target.responsetText;
    
}



window.addEventListener("load", comenzar, false);