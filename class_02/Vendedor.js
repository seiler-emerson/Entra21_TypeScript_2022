export class Vendedor {
    //Construtor
    constructor(nome, idade, comissao, vendasRealizadas) {
        this.nome = nome;
        this.idade = idade;
        this.comissao = comissao;
        this.vendasRealizadas = vendasRealizadas;
    }
    //Métodos
    apresentar() {
        return `O nome do vendedor é ${this.nome}, tem ${this.idade} anos. Tem  uma comissão de R%${this.comissao} por venda, atualmente tem ${this.vendasRealizadas} vendas realizadas.`;
    }
    calcularRendimento() {
        let rendimento = this.comissao * this.vendasRealizadas;
        return rendimento;
    }
}
