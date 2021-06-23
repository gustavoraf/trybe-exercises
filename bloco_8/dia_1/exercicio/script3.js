const darNota = (arr1, arr2) => {
  let nota = 0
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] === arr2[i]) {
      nota +=1
    } else if (arr1[i] === 'N.A' || arr2[i] === 'N.A') {
      nota -= 0.5
    }
  }
  return nota
}

const HOF = (gabarito, respostas, contador) => contador(gabarito, respostas)

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(HOF(rightAnswers, studentAnswers, darNota))