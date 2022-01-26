/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    url=document.getElementById("url");
    url.addEventListener("click", cambiaurl, false);
    
    window.addEventListener("popstate", nuevaurl, false);
    window.history.replaceState(1,null, null);
    
}
function cambiaurl(){
    /*zonadatos.innerHTML="Estas en la pagina 2";
    window.history.pushState(null, null, "pagina2.html");*/
    
    mostrar(2);
    window.history.pushState(2, null, "pagina2.html");
}
function nuevaurl(e){
    mostrar(e.state);
}
function mostrar(actual){
    zonadatos.innerHTML="Estas en la pagina: " + actual;
}

window.addEventListener("load", comenzar, false);
