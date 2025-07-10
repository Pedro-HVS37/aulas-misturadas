const prompt = require('prompt-sync')();

//9-verifique se um numero é multiplo de 5
let numero = 0;
numero = prompt("Digite um numero: ");
if (numero%5===0) {
    console.log(" - Multiplo de 5")
} else {
    console.log(" - Não é multiplo de 5")
}