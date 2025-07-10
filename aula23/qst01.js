//leia do usuario o nome de 5 frutas. adicione num array e exiba num console como saida.

const prompt = require('prompt-sync')();
let fruta;
let frutas = [];

for (let i = 0; i < 5; i++) {
    fruta = prompt("Digite um fruta: ");
    frutas.push(fruta);
};

console.log(frutas);

