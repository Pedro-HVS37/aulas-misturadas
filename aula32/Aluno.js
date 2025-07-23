const { Pessoa } = require('./Pessoa');

class Aluno extends Pessoa {
    matricula;
    curso;

    constructor(nome, idade, matricula, curso){
        super(nome, idade)
        this.matricula = matricula;
        this.curso = curso
    }
    estudar(){
        return `${this.nome} está estudando no curso de ${this.curso}.`
    }
}

module.exports = {Aluno};