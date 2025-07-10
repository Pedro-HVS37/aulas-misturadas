//calcular fatorial

const prompt = require('prompt-sync')();
const numero = Number(prompt("Digite um número: "));
let fatorial = numero;

do {
    fatorial=(fatorial-1)*numero
    console.log(`${fatorial}    ${numero}`);
} while (fatorial<=1)