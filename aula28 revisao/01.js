const prompt = require('prompt-sync')();

//1-verifique se um numero é positivo
let numero = 0;
numero = prompt("Digite um numero: ");
if (numero>=1) {
    console.log(` - ${numero} é positivo`);
}else if (numero>=0) {
    console.log(" - 0 é neutro");
}else{
    console.log(` - ${numero} não é positivo`);
}