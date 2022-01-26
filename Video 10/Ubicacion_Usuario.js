/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function comenzar(){
    var miboton=document.getElementById("dame_ubicacion");
    miboton.addEventListener("click", obtener, false);
    
}
function obtener(){
    var parametros={enableHighAccuracy: true, timeout:10000, maximumAge:60000};
    //navigator.geolocation.getCurrentPosition(mostrar_posicion);
    //navigator.geolocation.getCurrentPosition(mostrar_posicion, gestion_errores);
    //navigator.geolocation.getCurrentPosition(mostrar_posicion, gestion_errores, parametros);
    navigator.geolocation.watchPosition(mostrar_posicion, gestion_errores, parametros);
}
function mostrar_posicion(posicion){
    var ubicacion=document.getElementById("ubicacion");
    //var latitud="La Latitud: " + posicion.coords.latitude;
   /* miubicacion="";
    miubicacion+="Latitud: " + posicion.coords.latitude + "<br>";
    miubicacion+="Longitud: " + posicion.coords.longitude + "<br>";
    miubicacion+="Exactitud: " + posicion.coords.accuracy + "<br>";*/
    
    var mimapa="https://maps.google.com/maps/api/staticmap?center=" + posicion.coords.latitude + "," + posicion.coords.longitude + "," 
            + "&zoom=12&size=400x400&sensor=false&markers=" + posicion.coords.latitude + "," + posicion.coords.longitude;
    
    //var mimapa="https://maps.googleapis.com/maps/api/staticmap?center=" + posicion.coords.latitude + "," + posicion.coords.longitude + "," 
            + "&zoom=12&size=400x400&maptype=roadmap&sensor=false&markers=color:red" + posicion.coords.latitude + "," + posicion.coords.longitude;
    
    //ubicacion.innerHTML=miubicacion;
    ubicacion.innerHTML="<img src='" + mimapa + "'>";
    
}
function gestion_errores(error){
   // alert("Ha habido un error" + error.code + " " + error.message);
      /*  if(error.message=="User denied Geolocation"){
            alert("Debes permitir el uso de la Geolocalizacion en tu navegador");
        }*/
        if(error.code==1){
            alert("Debes permitir el uso de la Geolocalizacion en tu navegador");
        }
}



window.addEventListener("load", comenzar, false);
