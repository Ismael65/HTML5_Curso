/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var offsety;
            var ctx;
            var factorvalue=1;
            var fontfamily= "65px 'Gill Sans Ultra Bold', sans-serif";
            function init() {
                ctx=document.getElementById("canvas").getContext("2d");
                ctx.font = fontfamily;
                dologo();
                }
            function dologo(){
                var offsety = 80;
                ctx.fillText("HTML", 31, 60);
                ctx.translate(0,offsety);
                // Escudo de fondo naranja
                ctx.fillStyle="#e34c26";
                ctx.beginPath();
                ctx.moveTo(39,250);
                ctx.lineTo(17,0);
                ctx.lineTo(262,0);
                ctx.lineTo(239,250);
                ctx.lineTo(139, 278);
                ctx.closePath();
                ctx.fill();
                //naranja iluminado de la parte de la derecha
                ctx.fillStyle = "#f06529";
                ctx.beginPath();
                ctx.moveTo(139,257);
                ctx.lineTo(220,234);
                ctx.lineTo(239,20);
                ctx.lineTo(139,20);
                ctx.closePath();
                ctx.fill();
                //gris claro del 5 de su parte izquierda
                ctx.fillStyle ="#ebebeb";
                ctx.beginPath();
                ctx.moveTo(139,113);
                ctx.lineTo(98,113);
                ctx.lineTo(96,82);
                ctx.lineTo(139,82);
                ctx.lineTo(139,51);
                ctx.lineTo(62,51);
                ctx.lineTo(139,144);
                ctx.closePath();
                ctx.fill();
                
                ctx.beginPath();
                ctx.moveTo(139,193);
                ctx.lineTo(105,184);
                ctx.lineTo(103,159);
                ctx.lineTo(72,159);
                ctx.lineTo(76,207);
                ctx.lineTo(139,225);
                ctx.closePath();
                ctx.fill();
                //el 5 en lado de la derecha
                ctx.fillStyle = "#ffffff";
                ctx.beginPath();
                ctx.moveTo(139,113);
                ctx.lineTo(139,144);
                ctx.lineTo(177,144);
                ctx.lineTo(173,184);
                ctx.lineTo(139,193);
                ctx.lineTo(139,225);
                ctx.lineTo(202,207);
                ctx.lineTo(210,113);
                ctx.closePath();
                ctx.fill();
                
                ctx.beginPath();
                
            }
        
