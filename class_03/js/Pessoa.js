export class Pessoa {
    //Construtor
    constructor(nome, idade, cidade) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }
    //Métodos
    apresentar() {
        return `Oi meu nome é ${this.nome} `;
    }
}
