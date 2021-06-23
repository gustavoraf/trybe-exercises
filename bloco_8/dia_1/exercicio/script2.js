const compare = (number1, number2) => (number1 === number2) ? `Parabéns você ganhou` : `Tente novamente`
const meMandaramFazerUmaHOF = (number, compareFunction) => {
  const numeroDaSorte = (Math.floor(Math.random() * 10) / 2) + 1
  return compareFunction(number, numeroDaSorte)
}