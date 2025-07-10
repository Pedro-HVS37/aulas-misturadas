const prompt = require('prompt-sync')();

//15-verifique se é ano bissexto
let ano = 0;
ano = prompt("Digite um ano: ");
if (ano%4===0) {
    console.log("Ano bissexto");
} else {
    console.log("Ano não bissexto");
}