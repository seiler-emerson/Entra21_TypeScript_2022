import { Aluno } from "./Aluno.js"
import { Pessoa } from "./Pessoa.js"

export class Professor extends Pessoa {

    //Atributos
    private alunos:Array<Aluno>

    //Construtor
    constructor(nome: string, idade: number, cidade: string, alunos:Array<Aluno>) {
        super(nome, idade, cidade)
        this.alunos = alunos
    }

    //Métodos

    apresentar(): string {

        return `Oi meu nome é ${this.nome} `
    }

    gerarBoletins(): Array<number> {
        let boletins: Array<number> = []

        this.alunos.forEach(aluno => {
            boletins.push(aluno.calcularMedia())
            
        });
        return boletins
    }

}