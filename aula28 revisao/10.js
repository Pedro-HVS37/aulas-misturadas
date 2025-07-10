const prompt = require('prompt-sync')();

//10-verifique se a senha digitada é "1234"
let numero = 0;
const senha = 1234;
numero = prompt("Digite a senha: ");
if (numero == senha) {
    console.log("ACESSO PERMITIDO");
} else {
    console.log("ACESSO NNNNNNEEEEGGGGAAAAADDDDOOOOO");
}