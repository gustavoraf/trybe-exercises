let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
let listaDireta = ""
for (contador = 0; contador < groceryList.length; contador += 1) {
  listaDireta = listaDireta + ", " + groceryList[contador]
}

console.log(listaDireta)