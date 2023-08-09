var body = document.querySelector("body")
var isBlue = false;
setInterval(function(){
  if (isBlue) {
    body.style.backgroundColor = "white";
  }  
  else {
    body.style.background = "#3498db";
  }
  isBlue =!isBlue;
} ,3000);
   
var h2 = document.querySelector("h2")
h2.style.color = "red"


var one = document.querySelector(".one")
one.style.hover.color = "red"

var two = document.querySelector(".two")
two.style.hover.color = "red"

var three = document.querySelector(".three")
three.style.hover.color = "red"
