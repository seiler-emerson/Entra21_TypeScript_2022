export class Diretor {
    //Construtor
    constructor(nome, idade, cidade, professores) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.professores = professores;
    }
    //Métodos
    apresentar() {
        return `Oi meu nome é ${this.nome} `;
    }
    relatorioDesempenho() {
        return 1;
    }
}
