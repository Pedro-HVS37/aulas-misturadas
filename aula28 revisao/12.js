const prompt = require('prompt-sync')();

//12-verifique se o numero é negativo
let numero = 0;
numero = prompt("Digite um numero: ");
if (numero<=-1) {
    console.log(` - ${numero} é negativo`);
}else if (numero<=0) {
    console.log(" - 0 é neutro");
}else{
    console.log(` - ${numero} não é negativo`);
}