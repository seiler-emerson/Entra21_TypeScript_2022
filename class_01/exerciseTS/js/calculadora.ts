let nome: string = "Emerson"
let idade: number = 27
let estudando: boolean = true
let disciplinas: Array<String> = ["Java", "Angular", "SQL"]

function sum(): number {
    let numberOne: string = prompt("Insert primary number: ")
    let numberTwo: string = prompt("Insert second number: ")
    let result: number = (Number(numberOne) + Number(numberTwo))

    return result
}
function subtract(): number {
    let numberOne: string = prompt("Insert primary number: ")
    let numberTwo: string = prompt("Insert second number: ")
    let result: number = (Number(numberOne) - Number(numberTwo))

    return result
}
function divide(): number {
    let numberOne: string = prompt("Insert primary number: ")
    let numberTwo: string = prompt("Insert second number: ")
    let result: number = (Number(numberOne) / Number(numberTwo))

    return result
}
function multiply(): number {
    let numberOne: string = prompt("Insert primary number: ")
    let numberTwo: string = prompt("Insert second number: ")
    let result: number = (Number(numberOne) * Number(numberTwo))

    return result
}

$("<button>", {
    class: "btn btn-primary m-3",
    id: "sum",
    text: "SUM"}).appendTo("body")
$("<button>", {
    class: "btn btn-primary m-3",
    id: "subtract",
    text: "SUBTRACT"}).appendTo("body")
$("<button>", {
    class: "btn btn-primary m-3",
    id: "divide",
    text: "DIVIDE"}).appendTo("body")
$("<button>", {
    class: "btn btn-primary m-3",
    id: "multiply",
    text: "MULTIPLY"}).appendTo("body")

$("#sum").on("click", function(){
    alert(sum())
 })
$("#subtract").on("click", function(){
    alert(subtract())
 })
$("#divide").on("click", function(){
    alert(divide())
 })
$("#multiply").on("click", function(){
    alert(multiply())
 })