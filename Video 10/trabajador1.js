/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var puertos;
puertos=new Array();


addEventListener("connect", conectar, false);

function conectar(e){
    puertos.push(e.ports[0]);
    e.ports[0].onmessage=enviar;
    
}
function enviar(e){
    for(f=0;f<puertos.length;f++){
        puertos[f].postMessage("El texto que has puesto es: " + e.data);
    }
}

