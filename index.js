var slider = document.getElementById("myRange");
var style = document.querySelector('[data="test"]');

slider.oninput = function() {
  if (slider.value >= 90) {
    document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(268, 75%, 9%)";
    document.getElementsByClassName("btn1")[1].style.color = "black";

    for( let i=0; i<16; i++){
      if(i==3){
        document.getElementsByClassName("btn")[i].style.backgroundColor = "hsl(281, 89%, 26%)";
        document.getElementsByClassName("btn")[i].style.color = "white";
        document.getElementsByClassName("btn")[i].style.boxShadow = "0 2px 0 0 hsl(285, 91%, 52%)";
      }
      else{
        document.getElementsByClassName("btn")[i].style.backgroundColor = "hsl(268, 47%, 21%)";
        document.getElementsByClassName("btn")[i].style.color = "hsl(52, 100%, 62%)";
        document.getElementsByClassName("btn")[i].style.boxShadow = "0 2px 0 0 hsl(290, 70%, 36%)";
      }
    };


    document.getElementsByClassName("numbers")[0].style.color = "hsl(52, 100%, 62%)";
    document.getElementsByClassName("icon")[0].style.color = "hsl(52, 100%, 62%)";
    document.getElementsByClassName("text")[0].style.color = "hsl(52, 100%, 62%)";
    document.getElementsByClassName("input")[0].style.color = "hsl(52, 100%, 62%)";
    document.getElementsByClassName("input")[0].style.backgroundColor = "hsl(268, 71%, 12%)";
    document.getElementsByClassName("main")[0].style.backgroundColor = "hsl(268, 71%, 12%)";

    document.getElementsByClassName("btn1")[0].style.backgroundColor = "hsl(281, 89%, 26%)";
    document.getElementsByClassName("btn1")[1].style.backgroundColor = "hsl(176, 100%, 44%)";
    document.getElementsByClassName("slider")[0].style.backgroundColor = "hsl(268, 71%, 12%)";


    for( let i=0; i<2; i++){
      if(i==0){
        document.getElementsByClassName("btn1")[i].style.boxShadow = "0 2px 0 0 hsl(285, 91%, 52%)";
      }
      else{
        document.getElementsByClassName("btn1")[i].style.boxShadow = "0 2px 0 0 hsl(177, 92%, 70%)";
      }
    };

  }

  else if (slider.value < 90 && slider.value >= 40){

    document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(0, 0%, 90%)";
    document.getElementsByClassName("btn1")[1].style.color = "white";



    for( let i=0; i<16; i++){
      if(i==3){
        document.getElementsByClassName("btn")[i].style.backgroundColor = "hsl(185, 42%, 37%)";
        document.getElementsByClassName("btn")[i].style.color = "white";
        document.getElementsByClassName("btn")[i].style.boxShadow = "0 2px 0 0 hsl(185, 58%, 25%)";
      }
      else{
        document.getElementsByClassName("btn")[i].style.backgroundColor = "hsl(45, 7%, 89%)";
        document.getElementsByClassName("btn")[i].style.color = "hsl(60, 10%, 19%)";
        document.getElementsByClassName("btn")[i].style.boxShadow = "0 2px 0 0 hsl(35, 11%, 61%)";
      }
    };





    document.getElementsByClassName("numbers")[0].style.color = "hsl(60, 10%, 19%)";
    document.getElementsByClassName("icon")[0].style.color = "hsl(60, 10%, 19%)";
    document.getElementsByClassName("text")[0].style.color = "hsl(60, 10%, 19%)";
    document.getElementsByClassName("input")[0].style.color = "hsl(60, 10%, 19%)";
    document.getElementsByClassName("input")[0].style.backgroundColor = "hsl(0, 0%, 93%)";
    document.getElementsByClassName("main")[0].style.backgroundColor = "hsl(0, 5%, 81%)";

    document.getElementsByClassName("btn1")[0].style.backgroundColor = "hsl(185, 42%, 37%)";
    document.getElementsByClassName("btn1")[1].style.backgroundColor = "hsl(25, 98%, 40%)";
    document.getElementsByClassName("slider")[0].style.backgroundColor = "hsl(0, 5%, 81%)";

    for( let i=0; i<2; i++){
      if(i==0){
        document.getElementsByClassName("btn1")[i].style.boxShadow = "0 2px 0 0 hsl(185, 58%, 25%)";
      }
      else{
        document.getElementsByClassName("btn1")[i].style.boxShadow = "0 2px 0 0 hsl(25, 99%, 27%)";
      }
    };

  }

  else{

    document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(222, 26%, 31%)";
    document.getElementsByClassName("btn1")[1].style.color = "white";


    for( let i=0; i<16; i++){
      if(i==3){
        document.getElementsByClassName("btn")[i].style.backgroundColor = "hsl(225, 21%, 49%)";
        document.getElementsByClassName("btn")[i].style.color = "white";
        document.getElementsByClassName("btn")[i].style.boxShadow = "0 2px 0 0 hsl(224, 28%, 35%)";
      }
      else{
        document.getElementsByClassName("btn")[i].style.backgroundColor = "#EAE3DC";
        document.getElementsByClassName("btn")[i].style.color = "hsl(221, 14%, 31%)";
        document.getElementsByClassName("btn")[i].style.boxShadow = "0 2px 0 0 hsl(28, 16%, 65%)";
      }
    };




    document.getElementsByClassName("numbers")[0].style.color = "#EAE3DC";
    document.getElementsByClassName("icon")[0].style.color = "#EAE3DC";
    document.getElementsByClassName("text")[0].style.color = "#EAE3DC";
    document.getElementsByClassName("input")[0].style.color = "#EAE3DC";
    document.getElementsByClassName("input")[0].style.backgroundColor = "hsl(224, 36%, 15%)";
    document.getElementsByClassName("main")[0].style.backgroundColor = "hsl(223, 31%, 20%)";

    document.getElementsByClassName("btn1")[0].style.backgroundColor = "hsl(225, 21%, 49%)";
    document.getElementsByClassName("btn1")[1].style.backgroundColor = "hsl(6, 63%, 50%)";
    document.getElementsByClassName("slider")[0].style.backgroundColor = "hsl(223, 31%, 20%)";

    for( let i=0; i<2; i++){
      if(i==0){
        document.getElementsByClassName("btn1")[i].style.boxShadow = "0 2px 0 0 hsl(224, 28%, 35%)";
      }
      else{
        document.getElementsByClassName("btn1")[i].style.boxShadow = "0 2px 0 0 hsl(6, 70%, 34%)";
      }
    };

  }

}

slider.addEventListener("input", () => {
  const slider_value = slider.value;
  let thumb_color;
  if (slider_value < 40) {
    thumb_color = "hsl(6, 63%, 50%)";
  } else if (slider_value >= 40 && slider_value < 90) {
    thumb_color = "hsl(25, 98%, 40%)";
  } else {
    thumb_color = "hsl(176, 100%, 44%)";
  }
  style.innerHTML = `.slider::-webkit-slider-thumb { background-color: ${thumb_color} !important; } .slider:-moz-range-thumb {  ${thumb_color} !important; }`;
});

let a = 0;
let t = 0;

function myFunction(x) {
  var s = document.getElementsByClassName("value")[0].innerHTML
  for(let i=0; i<s.length; i++){
    if (s[i] == "+" || s[i] == "-" || s[i] == "/" || s[i] == "x" ){
      a = 1;
    }
  }
  
if (s.length == 1 && s == "0"){
  if (x.value == "+" || x.value == "-" || x.value == "/" || x.value == "x" ){
     document.getElementsByClassName("value")[0].innerHTML = document.getElementsByClassName("value")[0].innerHTML + x.value;
  }
  else{
     document.getElementsByClassName("value")[0].innerHTML = x.value;
  }
  
}  

else{  
  
if (x.value == "+" || x.value == "-" || x.value == "/" || x.value == "x" ){
  if (a == 0){
    document.getElementsByClassName("value")[0].innerHTML = document.getElementsByClassName("value")[0].innerHTML + x.value;
  }
  else{
    document.getElementsByClassName("value")[0].innerHTML = document.getElementsByClassName("value")[0].innerHTML;
  }
 }
else if (x.value == "."){
  if (t == 0 ){
    document.getElementsByClassName("value")[0].innerHTML = document.getElementsByClassName("value")[0].innerHTML + x.value;
    t = 1;
  }
  else{
    if (a == 1 && t == 1){
      document.getElementsByClassName("value")[0].innerHTML = document.getElementsByClassName("value")[0].innerHTML + x.value;
      t = 2;
    }
    else{
      document.getElementsByClassName("value")[0].innerHTML = document.getElementsByClassName("value")[0].innerHTML;
    }
  }
}
else{
  document.getElementsByClassName("value")[0].innerHTML = document.getElementsByClassName("value")[0].innerHTML + x.value;
}
}
}

function myReset() {
    document.getElementsByClassName("value")[0].innerHTML = "0" ;
    a = 0;
    t = 0;
}

function myDelete() {
  var str = document.getElementsByClassName("value")[0].innerHTML
  document.getElementsByClassName("value")[0].innerHTML = str.substr(0, str.length - 1) ;
}

let f = 0;
let y = "";

function myEqual(){
  var s = document.getElementsByClassName("value")[0].innerHTML
  for(let i=0; i<s.length; i++){
    if (s[i] == "+" || s[i] == "-" || s[i] == "/" || s[i] == "x" ){
      f = i;
      y = s[i];
    }
  }
  let e = s.substr(0,f);
  let g = s.substr(f+1,s.length-f-1);

  if (y == "+"){
    document.getElementsByClassName("value")[0].innerHTML = parseFloat(e) + parseFloat(g) ;
  }
  if (y == "-"){
    document.getElementsByClassName("value")[0].innerHTML = e - g;
  }
  if (y == "x"){
    document.getElementsByClassName("value")[0].innerHTML = e * g;
  }
  if (y == "/"){
    k = e/g;
    d = k.toFixed(2);
    document.getElementsByClassName("value")[0].innerHTML = d;
  }
a = 0
t = 0

}
