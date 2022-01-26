/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global importante */

function ejecuta(){
    /*document.getElementsByTagName("p")[2].onclick=saludo;*/
     /*document.getElementById(importante).onclick=saludo;*/
     
     /*for (var i = 0; i < 3; i++) {
        document.getElementsByTagName("p")[i].onclick = saludo;
    }*/
    /*for(var i=0; i<2; i++){
    var z=document.getElementsByClassName(importante)[i].onclick=saludo;
    }*/
    /*document.querySelector(".importante").onclick=saludo;*/
    /*document.querySelector("#principal p:last-child").onclick=saludo;*/
    /*var z=document.querySelectorAll("#principal p")[1].onclick=saludo;*/
    
    /*for(var i=0; i<4; i++){
    var elementos=document.querySelectorAll("#principal p");
    elementos[i].onclick=saludo;
    }*/
    
    var elementos=document.querySelectorAll("#principal p, span");
    for(var i=0; i<elementos.length; i++){
    
    elementos[i].onclick=saludo;
    }
    
    
}

function saludo(){
alert("Que hay de Nuevo?");
}

window.onload=ejecuta; 
