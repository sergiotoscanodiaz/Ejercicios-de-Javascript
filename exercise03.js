function getRandom(min,max) {
    return Math.floor(Math.random()* (max - min) + min);
  }


var a = getRandom(1,5);
var b = getRandom(1,5);
var c = getRandom(1,5);

switch (a){
    case 1:
        process.stdout.write("Corazón");
        break;
    case 2:
        process.stdout.write("Diamante");
        break;
    case 3:
        process.stdout.write("Herradura");
        break;
    case 4:
        process.stdout.write("Campana"); 
        break;
    case 3:
        process.stdout.write("Limón");
}
switch (b){
    case 1:
        process.stdout.write("Corazón");
        break;
    case 2:
        process.stdout.write("Diamante");
        break;
    case 3:
        process.stdout.write("Herradura");
        break;
    case 4:
        process.stdout.write("Campana"); 
        break;
    case 3:
        process.stdout.write("Limón");
}
switch (c){
    case 1:
        process.stdout.write("Corazón");
        break;
    case 2:
        process.stdout.write("Diamante");
        break;
    case 3:
        process.stdout.write("Herradura");
        break;
    case 4:
        process.stdout.write("Campana"); 
        break;
    case 3:
        process.stdout.write("Limón");
}
if (a == b && b == c  && a==c) {
    console.log(); 
    console.log("Enhorabuena, ha ganado 10 monedas");
}else if(a==b && a!=c && b==c || a!=b && b==c && a==c|| a==b && b!=c && a==c){
    console.log(); 
    console.log("Bien, ha recuperado su moneda");
}
    console.log();    
    console.log("Has perdido");
