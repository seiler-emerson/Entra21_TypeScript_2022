import { Professor } from "./Professor.js"

export class Diretor {

    //Atributos
    public nome: string
    public idade: number
    public cidade: string
    private professores:Array<Professor>

    //Construtor
    constructor(nome: string, idade: number, cidade: string, professores:Array<Professor>) {
        this.nome = nome
        this.idade = idade
        this.cidade = cidade
        this.professores = professores
    }

    //Métodos

    apresentar(): string {

        return `Oi meu nome é ${this.nome} `
    }

    relatorioDesempenho(): number {


        return 1
    }

}