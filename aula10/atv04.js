//analisando notas de alunos

let aprovados = 0;
let notas = [4, 5, 6, 7, 9]

for (let i = 0; i < notas.length; i++) {

    if (notas[i]<=5) {
        console.log(notas[i], `Reprovado`);
        
    } else {
        console.log(notas[i], `Aprovado`);
        aprovados++
    }
    
};
console.log(`${aprovados} alunos foram aprovados`);