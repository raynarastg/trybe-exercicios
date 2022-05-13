const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'), 
    id3: callback('Carla Paiva'), 
  }
  return employees;
};

const nomePessoa = (nome) => {
  const nome_sobrenome = nome.replaceAll(' ', '_').toLowerCase()
  return {
    nome: nome,
    email: `${nome_sobrenome}@trybe.com`
  }
}
console.log(newEmployees(nomePessoa));

////

const confereAposta = (numeroApostado, funcaoSortear) => {
  return funcaoSortear(numeroApostado) ? 'Parabéns, você ganho' : 'Tente novamente'
}
const gerarNumeroAleatorio = (callback) => {
  const numeroAleatorio = Math.floor(Math.random() * 5) + 1
  if (callback === numeroAleatorio) {
    return true
  }
return false
}
console.log(confereAposta(3, gerarNumeroAleatorio))