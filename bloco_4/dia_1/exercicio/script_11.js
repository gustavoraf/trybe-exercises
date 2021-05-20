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