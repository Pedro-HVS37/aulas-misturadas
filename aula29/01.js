const prompt = require('prompt-sync')();
let nota = 0;
nota = prompt("Digite uma nota de 0 a 10: ");
if (nota>=7) {
    console.log("APROVADO");
}else if (nota>=5 && nota<=6.9) {
    console.log("RECUPERAÇÃO");
}else{
    console.log("REPROVADO");
}