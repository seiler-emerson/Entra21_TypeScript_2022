import { Aluno } from "./Aluno.js";
import { Professor } from "./Professor.js";

let fulano: Aluno = new Aluno("Emerson", 27, "Navegantes", [10,9,10])

let alunoTeste:Aluno = new Aluno("Oliota", 33, "Blumenau", [10,10,10])

let professorOliota: Professor = new Professor("Rubem", 33, "Blumenau", [fulano, alunoTeste])

console.log(fulano.nome, fulano.idade, fulano.cidade)

console.log(fulano.apresentar());
console.log(fulano.calcularMedia());

console.log(alunoTeste.apresentar());
console.log(alunoTeste.calcularMedia());

console.log(professorOliota.nome, professorOliota.idade, professorOliota.cidade, professorOliota.gerarBoletins());
