function palindromo(word) {
  let invertedWord = ""
  for (let letters = word.length - 1; letters >= 0; letters -= 1) {
    invertedWord = invertedWord + word[letters]
  }
  if (word == invertedWord) {
    return true
  }
  else {
    return false
  }
}
console.log(palindromo("arara"))
console.log(palindromo("desenvolvimento"))