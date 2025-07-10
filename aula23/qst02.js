//soma dos numeros

const prompt = require('prompt-sync')();
let numero;
let numeros = [];


for (let i = 0; i < 5; i++) {
    numero = prompt("Digite um numero: ");
    numeros.push(numero);
};

let total =  numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4]
console.log(numeros, total);
