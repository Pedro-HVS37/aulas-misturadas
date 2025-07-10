const prompt = require('prompt-sync')();

//13-verifique se um numero é maior que o outro
let numero1 = 0;
let numero2 = 0;
numero1 = Number(prompt("Digite um numero: "));
numero2 = Number(prompt("Digite um numero: "));
if (numero1>numero2) {
    console.log(`${numero1} é maior que ${numero2}`);
} else {
    console.log(`${numero2} é maior que ${numero1}`);
}