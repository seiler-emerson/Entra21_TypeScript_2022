let nome = "Emerson Seiler";
let idade = 27;
console.log(nome, idade);
$("<p>", {
    text: `oi ${nome}, você tem ${idade} anos`
}).appendTo("body");
function teste() {
    return 0;
}
function dados(nome, idade) {
    if (nome == "Emerson" && idade == 27) {
        return true;
    }
    else {
        return false;
    }
}
function somar(numA, numB) {
    return numA + numB;
}
console.log(`A soma deu ${somar(1, 5)}`);
