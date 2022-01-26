/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    var archivo=document.getElementById("archivos");
    archivo.addEventListener("change", procesar, false);
}
function procesar(e){
    var archivos=e.target.files;
    zonadatos.innerHTML="";
    var mi_archivo=archivos[0];
    
    //alert(mi_archivo.type);
    if(!mi_archivo.type.match(/image/)){
        alert("Selecciona una imagen, por favor");
        } else {
            zonadatos.innerHTML+="Nombre del archivo: " + mi_archivo.name + "<br>";
            zonadatos.innerHTML+="Tamaño del archivo: " + mi_archivo.size + "bytes <br>";
            zonadatos.innerHTML+="Tamaño del archivo: " + Math.round(mi_archivo.size/1024) + "Kb <br>";
            var lector=new FileReader;
            lector.readAsDataURL(mi_archivo);
            lector.addEventListener("load", mostrar_en_web, false);
        }
        
   // lector.readAsText(mi_archivo, "iso-8859-1");
       
}
function mostrar_en_web(e){
    var resultado=e.target.result;
    zonadatos.innerHTML+="<img src='" + resultado + "' width='85%'>";
    
}



window.addEventListener("load", comenzar, false);
