const prompt = require('prompt-sync')();

//verificar se um aluno passou por media
let nota = 0;
nota = prompt("Digite a nota do aluno: ");
if (nota>=7) {
    console.log(" - APROVADO");
} else {
    console.log(" - REPROVADO");
}