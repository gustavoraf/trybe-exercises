//1
let a;
let b;

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

//2
let a;
let b;
switch (a >= b) {
  case true:
    console.log(a)
    break
  default:
    console.log(b)
}

//3
let a;
let b;
let c;
if (a >= b && a >= c) {
  console.log(a)
}
else if (b >= c) {
  console.log(b)
}
else {
  console.log(c)
}

//4
let a;
if (a > 0) {
  console.log("positivo")
}
else if (a < 0) {
  console.log("negativo")
}
else {
  console.log("zero")
}

//5
let a;
let b;
let c;
if (a+b+c == 180) {
  console.log(true)
}
else if (a =< 0) {
  console.log("valor(es) inválidos")
}
else if (b =< 0) {
  console.log("valor(es) inválidos")
}
else if (b =< 0) {
  console.log("valor(es) inválidos")
}
else {
  console.log(false)
}

//6
let a;
if (a.toLowerCase() == "king") {
  console.log("1 square to any direction")
}
else if (a.toLowerCase() == "queen") {
  console.log("any number of squares to any direction")
}
else if (a.toLowerCase() == "rook") {
  console.log("any number of squares to cross oriented directions")
}
else if (a.toLowerCase() == "knight") {
  console.log("L shaped movement")
}
else if (a.toLowerCase() == "bishop") {
  console.log("any number of squares to diagonals oriented directions")
}
else if (a.toLowerCase() == "pawn") {
  console.log("where it starts, can move 2 squares. Then can only move 1 square. Only moves forward, but only kills 1 square of it forward diagonals")
}
else {
  console.log("invalid piece")
}

//7
let a;
if (a <= 100 && a >= 90) {
  console.log("A")
}
else if (a < 90 && a >= 80) {
  console.log("B")
}
else if (a < 80 && a >= 70) {
  console.log("C")
}
else if (a < 70 && a >= 60) {
  console.log("D")
}
else if (a < 60 && a >= 50) {
  console.log("E")
}
else if (a < 50) {
  console.log("F")
}
else {
  console.log("erro, número maior que 100 ou menor que 0")
}

//8
let a;
let b;
let c;
if (a < 0 && b < 0 && c < 0) {
  console.log(false)
}
else {
  console.log(true)
}

//9
let a;
let b;
let c;
if ((a%2) == 0 && (b%2) == 0 && (c%2) == 0) {
  console.log(false)
}
else {
  console.log(true)
}

//10
let custo;
let venda;
if (custo >= 0 && venda >= 0) {
  console.log(1000*(venda - (custo*1.2)))
}
else {
  console.log("Valor de custo e venda não pode ser negativo")
}

//11
let salario;
let desconto;
let liquido;
if (salario <= 1556.94) {
  desconto = 0.92*salario
}
else if (salario > 1556.94 && salario <= 2594.92) {
  desconto = 0.91*salario
}
else if (salario > 2594.92 && salario <= 5189.82) {
  desconto = 0.89*salario
}
else {
  desconto = salario - 570.88
}
if (desconto > 1903.98 && desconto <= 2826.65) {
  liquido = 0.925*desconto + 142.80
}
else if (desconto > 2826.65 && desconto <= 3751.05) {
  liquido = 0.85*desconto + 354.80
}
else if (desconto > 3751.05 && desconto <= 4664.68) {
  liquido = 0.775*desconto + 636.13
}
else if (desconto > 4664.68) {
  liquido = 0.725*desconto + 869.36
}
else {
  liquido = desconto
}
console.log(liquido)