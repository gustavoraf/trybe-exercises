function sumOfOneTillNumber(number) {
  let sum = null; 
  for (let i = number; i > 0; i -= 1) {
    sum = sum + i
  }
  return sum
}
console.log(sumOfOneTillNumber(5))