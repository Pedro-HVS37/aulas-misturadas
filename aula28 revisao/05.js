const prompt = require('prompt-sync')();

//5-verifique se duas palavras digitadas sao iguais
palavra1 = prompt("Digite uma palavra: ");
palavra2 = prompt("Digite uma palavra: ");
if (palavra1==palavra2) {
    console.log(" - São iguais");
} else {
    console.log(" - Não são iguais");
}