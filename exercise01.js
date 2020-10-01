const prompt = require('prompt-sync')();

const height = prompt('Introduzca la altura de la pirámide numérica: ');

var space = height;

// Returns a line like 1234321
// I.e. lettering(3) returns 12321

const lettering = (counter) => {
		var adder = 1;
        var line = "";
        
        // First part of the line. From 1 to counter. 
        // I.e. 1234
		do {
		line += "" + adder;
		adder++;
        } while (adder <= counter);
        
        // Second part of the line. From counter -1 to 1.
        // I.e 321
        line += line.split('').reverse().join('').slice(1);
        
        // I.e. 1234321
		return line;		
}


var middleNumber = 1;
/*
lettering(1)      1
lettering(2)     121
lettering(3)    12321
lettering(4)   1234321
lettering(5)  123454321
*/

	do {
        let stringi = lettering(middleNumber);
        console.log(stringi.padStart(Number(stringi.length) + Number(space)));
        middleNumber++;
        space--;	
	} while (space > 0); 


