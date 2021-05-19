let nota = 39
let estado;

if (nota >= 80) {
  estado = "aprovado"
  console.log("Parabéns, você foi aprovada(o)")
}

else if (nota < 80 && nota >= 60) {
  estado = "lista"
  console.log("Você está na lista de espera")
}

else {
  estado = "reprovado"
  console.log("Você foi reprovado(a)")
}

switch (estado) {
  case "aprovado":
    console.log("Parabéns, você foi aprovada(o)")
    break
  
  case "lista":
    console.log("Você está na lista de espera")
    break
  
  default:
    console.log("Você foi reprovado(a)")
}