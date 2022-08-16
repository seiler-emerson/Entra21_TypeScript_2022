export class Pessoa {

    //Atributos
    public nome: string
    public idade: number
    public cidade: string

    //Construtor
    constructor(nome: string, idade: number, cidade: string) {
        this.nome = nome
        this.idade = idade
        this.cidade = cidade
    }

    //Métodos

    apresentar(): string {

        return `Oi meu nome é ${this.nome} `
    }


}