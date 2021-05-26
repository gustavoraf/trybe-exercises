let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = 0;
for (i of numbers) {
  if (i%2 != 0) {
    contador += 1
  }
}
console.log(contador)