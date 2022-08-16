import { Pessoa } from "./Pessoa.js";
export class Professor extends Pessoa {
    //Construtor
    constructor(nome, idade, cidade, alunos) {
        super(nome, idade, cidade);
        this.alunos = alunos;
    }
    //Métodos
    apresentar() {
        return `Oi meu nome é ${this.nome} `;
    }
    gerarBoletins() {
        let boletins = [];
        this.alunos.forEach(aluno => {
            boletins.push(aluno.calcularMedia());
        });
        return boletins;
    }
}
