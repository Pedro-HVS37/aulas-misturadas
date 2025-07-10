let prompt = require('prompt-sync')();
numero = parseInt(prompt("Digite um numero: "));

let tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < tabuada.length; i++) {
    console.log(`${numero} x ${i} = `, numero*i);
    if (i>=9) {
        console.log(`${numero} vezes 10 é igual a `, numero*10);
    }
}