/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mivideo, reproducir, barra, progreso, maximo,ratonX,nuevoTiempo;
maximo=600;

function comenzar(){
    mivideo=document.getElementById("mivideo");
    reproducir=document.getElementById("reproducir");
    barra=document.getElementById("barra");
    progreso=document.getElementById("progreso");
    
    reproducir.addEventListener("click", clicando, false);
    
    barra.addEventListener("click", adelantando, false);
    
}

function clicando(){
    if ((mivideo.paused)===false && (mivideo.ended)===false) {
        mivideo.paused();
        reproducir.innerHTML="play";
    
   }
   else{
      mivideo.play();  
      reproducir.innerHTML="paused";
      bucle=setInterval(estado,300);
    }
}
    
function estado(){
    if (mivideo.ended===false) {
        var total=parseInt(mivideo.currentTime*maximo/mivideo.duration);
        progreso.style.width=total+"px";
    }
    }

    function adelantando(posicion){
        if ((mivideo.paused)===false && (mivideo.ended)===false) {
            var ratonX=posicion.pagex-barra.offsetLeft;
            var nuevoTiempo=ratonX*mivideo.duration/maximo;
            mivideo.currentTime=nuevoTiempo;
            progreso.style.width=ratonX+"px";
            
        } 
}




window.addEventListener("load", comenzar, false);