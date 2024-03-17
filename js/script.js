// js
var number1 = 5;
var number2 = 2;
var number3 = number1 + number2;

function calculation(){
          document.getElementById('value').innerHTML=number3;
}
// ..........
function textShow(){
          document.getElementById('text').style.display='block';

}
function textHide(){
          document.getElementById('text').style.display='none';

}

// color change
function colorChange(){
          document.getElementById('c_c').style.color="red";
}
// bulb on/off
function bulbOn(){
          document.getElementById('bulb').src ='image/on.gif';

}
function bulbOff(){
          document.getElementById('bulb').src ='image/off.gif';
          
}

// show date
function showDate(){

          document.getElementById('s_d').innerHTML= Date();
}



// text change
function textChange(){

          document.getElementById('t_c').innerHTML = "hello";
          
}