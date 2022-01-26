/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function comenzar(){
    var boton=document.getElementById("grabar");
    boton.addEventListener("click", itemNuevo, false);
    
}
function itemNuevo(){
    var clave=document.getElementById("clave").value;
    var valor=document.getElementById("valor").value;
    //sessionStorage.setItem(clave, valor);
    localStorage.setItem(clave, valor);  //sustituir todos los sessionStorage por localStorage
   //sessionStorage[clave]=valor;
   
    leer_mostrar(clave);
    document.getElementById("clave").value="";
    document.getElementById("valor").value="";
}
function leer_mostrar(clave){
    var zonadatos=document.getElementById("zonadatos");
    zonadatos.innerHTML='<div><buttom onclick="eliminarTodo()">Eliminar todo</buttom></div>';
    //var elvalor=sessionStorage[clave];
    
    
    for(i=0;i<localStorage.length;i++){
        var clave=localStorage.key(i);
        elvalor=localStorage.getItem(clave);
        zonadatos.innerHTML+='<div>Clave: ' + clave + '--' + 'Valor: ' + elvalor + '<br><buttom onclick="eliminarItem(\'' + clave + '\')">Eliminar</buttom></div>';
    }
    
}
function eliminarTodo(){
    if(confirm("Estas seguro?")){
        localStorage.clear();
        leer_mostrar();
    }
}
function eliminarItem(clave){
    if(confirm("Estas seguro?")){
        localStorage.removeItem(clave);
        leer_mostrar();
    }
}


window.addEventListener("load", comenzar, false);
