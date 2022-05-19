// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, element) => {
    const tamanho = element.toLocaleLowerCase().split('').filter((e) => e === 'a')
    // console.log(tamanho, acc)
    return acc += tamanho.length;
}, 0) // (element === 'a' || element === 'A') ? acc += 1 : acc += 0
}
console.log(containsA())