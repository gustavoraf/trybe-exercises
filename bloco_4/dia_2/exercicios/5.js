let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0];
for (let i of numbers) {
  if (i > maiorNumero) {
    maiorNumero = i
  }
}
console.log(maiorNumero)