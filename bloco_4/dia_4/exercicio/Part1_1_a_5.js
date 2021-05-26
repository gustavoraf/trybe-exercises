let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christimas on Bear Mountain, Dell's Four Collor COmics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
}

console.log("Bem-vinda, " + info.personagem)
info["recorrente"] = "Sim", "Sim"
console.log(info)
for (let coisas in info) {
  console.log(coisas)
}
for (let coisas in info) {
  if (info[coisas] == info2[coisas]){
    console.log("Ambos recorrentes")
  }
  else {
    console.log(info[coisas] + " e " + info2[coisas])
  }
}
