/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function iniciar(){
    window.addEventListener("message", receptor, false);
    
}
function receptor(e){
    var zonamensajes=document.getElementById("zonamensajes");
    if(e.origin=="http://localhost:8383/curso_HTML5/"){
    zonamensajes.innerHTML+="Mensaje desde: " + e.origin + "<br>";
    zonamensajes.innerHTML+="Mensaje: " + e.data + "<br>";
    e.source.postMessage("Mensaje recibido correctamente" + "<br>", e.origin);
    }else{
        e.source.postMessage("Mensaje erroneo" + "<br>", e.origin);
    }
}



window.addEventListener("load", iniciar, false);