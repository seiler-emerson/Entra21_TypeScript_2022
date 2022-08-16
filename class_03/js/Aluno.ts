import { Pessoa } from "./Pessoa.js"

export class Aluno extends Pessoa{

    //Atributos

    private notas:Array<number>

    //Construtor
    constructor(nome: string, idade: number, cidade: string, notas:Array<number>) {
        super(nome, idade, cidade)
        this.notas = notas
    }

    //Métodos

    apresentar(): string {

        return `Oi meu nome é ${this.nome} `
    }

    calcularMedia(): number {

        return this.notas.reduce((anterior, posterior)=>posterior+anterior,0)/this.notas.length
    }

}