const contatarFuncionario = name => {
  const nomeMinusculo = name.toLowerCase()
  const nomeSeparado = nomeMinusculo.split(' ')
  return {
    name,
    email: `${nomeSeparado[0]}_${nomeSeparado[1]}@trybe.com`
  }
}

const newEmployees = () => {
  const employees = {
    id1: contatarFuncionario('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: contatarFuncionario(' Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: contatarFuncionario('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};