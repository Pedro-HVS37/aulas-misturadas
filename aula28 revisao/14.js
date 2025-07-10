const prompt = require('prompt-sync')();

//14-verifique se um numero é igual a 0
let numero = 0;
numero = prompt("Digite um numero: ")
if (numero==0) {
    console.log("Igual a 0");
} else {
    console.log("Não é igual a 0");
}