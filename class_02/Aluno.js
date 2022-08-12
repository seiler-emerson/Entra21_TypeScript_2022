export class Aluno {
    //Construtor
    constructor(nome, idade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }
    //Métodos
    apresentar() {
        return `Ola meu nome é ${this.nome} tenho ${this.idade} anos.`;
    }
    calcularMedia() {
        let soma = 0;
        this.notas.forEach(nota => {
            soma += nota;
        });
        return soma / this.notas.length;
        //return this.notas.reduce((anterior,posterior) => anterior+posterior,0 ) / this.notas.length
    }
}
