//questao 20 da prova
const prompt = require('prompt-sync')();
let nomes = [];
let idades = [];
let idade, nome;

for (let i = 0; i < 5; i++) {
    nome = prompt("Digite um nome: ");
    nomes.push(nome);
    idade = parseInt(prompt("Digite a idade: "));
    idades.push(idade);
}
console.log("Pessoas maiores de idade: ");
for (let j = 0; j < nomes.length; j++) {
    if (idades[j] >= 18){
        console.log(nomes[j]);
    }
}
