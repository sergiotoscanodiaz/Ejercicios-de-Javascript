const prompt = require('prompt-sync')();
const numReyes = prompt('Introduzca el número de reyes: ');

console.log("Vaya introduciendo los nombres de los reyes y pulsando INTRO");

var reyes = [];

for (let i = 0; i < numReyes; i++) {
     reyes[i] = prompt();
}

for (let i = 0; i < numReyes; i++) {
    var orden = 1;
    for (let j = 0; j < i; j++) {
        if(reyes[i] == reyes[j]){
            orden ++;
        }
        
    }
    console.log(reyes[i] + " " + orden + "º")
}