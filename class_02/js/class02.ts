import { Aluno } from "../Aluno.js";
import { Animal } from "../Animal.js";
import { Professor } from "../Professor.js";
import { Vendedor } from "../Vendedor.js";


console.log("Aula 02 Funcionou!");

// ANIMAL 1
let animal1: Animal = new Animal("drosofila", "mosca", 0.5, ["Ar", "Lixo", "Comida"])

console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.getEspecie);

animal1.nome = "Cachorro"
animal1.peso = 25.5
animal1.habitat = ["Terreno", "Garagem", "Jardim"]
animal1.setEspecie = "Lupus Caninos"

console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.getEspecie);

// ANIMAL 2
let animal2: Animal = new Animal("Hydrochoerus hydrochaeris", "capivara", 15, ["Agua", "Mangue"])

console.log(animal2)
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitat[0]);
console.log(animal2.getEspecie);

animal2.nome = "Gato"
animal2.peso = 3.1
animal2.habitat = ["Sofa", "Quarto"]
animal2.setEspecie = "Felis catus"

console.log(animal2);
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitat[0]);
console.log(animal2.getEspecie);

// Aluno
let emerson: Aluno = new Aluno("Emerson Seiler", 27, [10,9,9])
console.log(emerson);

console.log(emerson.nome);
console.log(emerson.idade);
console.log(emerson.calcularMedia());
console.log(emerson.apresentar());


// Professor
let oliota: Professor = new Professor("Rubem Oliota", 33, ["Java"], 250, 16)
console.log(oliota);

console.log(oliota.nome);
console.log(oliota.idade);
console.log(oliota.disciplinas[0]);
console.log(oliota.apresentar());
console.log(oliota.calcularRendimento());

// Vendedor
let vendedor1: Vendedor = new Vendedor("Carlos Gabriel", 25, 150, 16)
console.log(vendedor1);

console.log(vendedor1.nome);
console.log(vendedor1.idade);
console.log(vendedor1.comissao);
console.log(vendedor1.apresentar());
console.log(vendedor1.calcularRendimento());