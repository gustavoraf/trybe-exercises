let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let bagulhoLoko = [];
let bagulhoLokao = [];
for (let i = 1; i <= 25; i += 1) {
  bagulhoLoko.push(i)
}
//console.log(bagulhoLoko)

for (j of bagulhoLoko) {
  bagulhoLokao.push(j/2)
}

console.log(bagulhoLokao)