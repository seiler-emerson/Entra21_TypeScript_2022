export class Vendedor {

    //Atributos
    public nome: string
    public idade: number
    public comissao: number
    public vendasRealizadas: number

    //Construtor
    constructor(
        nome: string,
        idade: number,
        comissao: number,
        vendasRealizadas: number

    ) {
        this.nome = nome
        this.idade = idade
        this.comissao = comissao
        this.vendasRealizadas = vendasRealizadas
    }

    //Métodos
    
    public apresentar() : string {
        return `O nome do vendedor é ${this.nome}, tem ${this.idade} anos. Tem  uma comissão de R%${this.comissao} por venda, atualmente tem ${this.vendasRealizadas} vendas realizadas.`
    }

    public calcularRendimento():number {
        let rendimento: number = this.comissao * this.vendasRealizadas

        return rendimento
    }
    
}