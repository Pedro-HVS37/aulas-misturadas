const {Pessoa} = require('./Pessoa');
const {Professor} = require('./Professor');
const {Aluno} = require('./Aluno');

let p1 = new Pessoa("Pedro", 18);
console.log(p1.apresentar());
let aluno1 = new Aluno("Barack Obama", 74, "0001");
console.log(aluno1.apresentar());
let professor1 = new Professor("Jair Bolsonaro", 3795);
console.log(professor1.apresentar());
