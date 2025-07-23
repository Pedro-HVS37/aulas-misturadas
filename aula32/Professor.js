const { Pessoa } = require('./Pessoa');

class Professor extends Pessoa{
    matricula;
    diciplina;
    constructor(nome, idade, matricula, diciplina){
        super(nome, idade);
        this.matricula = matricula;
        this.diciplina = diciplina;
    }
    ensinar(){
        return `${this.nome} está ensinando ${this.disciplina}.`
    }
}

module.exports = {Professor};