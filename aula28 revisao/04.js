const prompt = require('prompt-sync')();

//4-verifique se a pessoa é maior de idade
let idade = 0;
idade = prompt("Digite sua idade: ");
if (idade>=18) {
    console.log(" - Você é maior de idade");
} else {
    console.log(" - Você não é maior de idade");
}