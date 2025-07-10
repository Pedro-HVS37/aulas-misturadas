const prompt = require('prompt-sync')();

//3-verifique se a idade pode votar
let idade = 0;
idade = prompt("Digite sua idade: ");
if (idade>=16) {
    console.log(` - Pode votar`);
} else {
    console.log(` - Não pode votar`);
}