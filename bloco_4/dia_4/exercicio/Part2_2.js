function biggerIndex (array) {
  let bigger = array[0]
  for (index of array) {
    if (index > bigger) {
      bigger = index
    }
  }
  return array.indexOf(bigger)
}
console.log(biggerIndex([2, 3, 6, 7, 10, 1]))