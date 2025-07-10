const prompt = require('prompt-sync')();

//6-verifique se um numero esta entre 10 ou 100
let numero = 0;
numero = prompt("Digite um numero: ");
if (numero>=10 && numero<=100) {
    console.log(` - O numero ${numero} esta entre 10 e 100`)
} else {
    console.log(` - O numero ${numero} não esta entre 10 e 100`)
}