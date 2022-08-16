let nome = "Emerson";
let idade = 27;
let estudando = true;
let disciplinas = ["Java", "Angular", "SQL"];
function sum() {
    let numberOne = prompt("Insert primary number: ");
    let numberTwo = prompt("Insert second number: ");
    let result = (Number(numberOne) + Number(numberTwo));
    return result;
}
function subtract() {
    let numberOne = prompt("Insert primary number: ");
    let numberTwo = prompt("Insert second number: ");
    let result = (Number(numberOne) - Number(numberTwo));
    return result;
}
function divide() {
    let numberOne = prompt("Insert primary number: ");
    let numberTwo = prompt("Insert second number: ");
    let result = (Number(numberOne) / Number(numberTwo));
    return result;
}
function multiply() {
    let numberOne = prompt("Insert primary number: ");
    let numberTwo = prompt("Insert second number: ");
    let result = (Number(numberOne) * Number(numberTwo));
    return result;
}
$("<button>", {
    class: "btn btn-primary m-3",
    id: "sum",
    text: "SUM"
}).appendTo("body");
$("<button>", {
    class: "btn btn-primary m-3",
    id: "subtract",
    text: "SUBTRACT"
}).appendTo("body");
$("<button>", {
    class: "btn btn-primary m-3",
    id: "divide",
    text: "DIVIDE"
}).appendTo("body");
$("<button>", {
    class: "btn btn-primary m-3",
    id: "multiply",
    text: "MULTIPLY"
}).appendTo("body");
$("#sum").on("click", function () {
    alert(sum());
});
$("#subtract").on("click", function () {
    alert(subtract());
});
$("#divide").on("click", function () {
    alert(divide());
});
$("#multiply").on("click", function () {
    alert(multiply());
});
