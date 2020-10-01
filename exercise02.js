const prompt = require('prompt-sync')();
var hight = prompt('Introduzca la altura de la piramide: ');
var width = hight-1;
var pyramid = "";

for (var i = 0; i < hight-1; i++){
    //Blanck space
    for(var j = 0; j  < width; j++) {
        pyramid += " ";
    }
    //First half
    pyramid += "*";
    for(var j = 1; j <= i; j++) {

        pyramid += " ";
    }
    //Second half
    for(var j = i-1; j > 0; j--){

        pyramid += " ";
    }
    if (i != 0)  pyramid += "*";
    width--;
    pyramid += "\n";
}
for (var i = 0; i < hight*2-1;i++) pyramid += "*";
console.log(pyramid);