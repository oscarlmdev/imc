var height = document.getElementById("height").value;
var weight = document.getElementById("weight").value;

var imc = weight/(height*height);

document.getElementById("submit").onsubmit = showIMC();

function showIMC(){
    
}
