import { Pessoa } from "./Pessoa.js";
export class Aluno extends Pessoa {
    //Construtor
    constructor(nome, idade, cidade, notas) {
        super(nome, idade, cidade);
        this.notas = notas;
    }
    //Métodos
    apresentar() {
        return `Oi meu nome é ${this.nome} `;
    }
    calcularMedia() {
        return this.notas.reduce((anterior, posterior) => posterior + anterior, 0) / this.notas.length;
    }
}
