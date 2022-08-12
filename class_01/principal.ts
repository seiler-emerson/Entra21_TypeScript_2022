let nome: string = "Emerson Seiler"
let idade: number = 27

console.log(nome, idade);

$("<p>", {
    text: `oi ${nome}, você tem ${idade} anos`
}).appendTo("body")

function teste(): number {
    return 0
}

function dados(nome: string, idade: number): boolean {
    if(nome == "Emerson" && idade == 27) {
        return true
    } else {
        return false
    }
}

function somar(numA:number, numB:number): number {

    return numA+numB
}

console.log(`A soma deu ${somar(1,5)}`);
