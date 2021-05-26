function maiorNome(array) {
  maiorNome = array[0]
  for (nome of array) {
    if (nome.length > maiorNome.length) {
      maiorNome = nome
    }
  }
  return maiorNome
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))