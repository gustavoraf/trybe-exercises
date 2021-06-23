const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenarArray = array => {
  for (let i = 0; i < oddsAndEvens.length; i += 1) {
    for (let j = 0; j < oddsAndEvens.length; j += 1) {
      if (oddsAndEvens[i] > oddsAndEvens[j]) {
        let save = oddsAndEvens[j]
        oddsAndEvens[j] = oddsAndEvens[i]
        oddsAndEvens[i] = save
      }
    } 
  }
}

console.log(ordenarArray(oddsAndEvens));