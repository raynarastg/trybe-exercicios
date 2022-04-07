//exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}
// ex 2
var soma = 0;
for (let index = 0; index < numbers.length; index++) {
  soma = soma + numbers[index];
}
console.log(soma);
// ex 3
var media = soma / 10;
console.log(media);
// ex 4
if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}
// ex 5
var maior = 0;
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > maior) {
    maior = numbers[index];
  }
}
console.log(maior);
// ex 6
let contagemImpares = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 == 1) {
    contagemImpares++;
  }
}

if (contagemImpares > 0) {
  console.log(contagemImpares);
} else {
  console.log("nenhum valor ímpar encontrado");
}
// ex 7
let menorValor = numbers[0];

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] < menorValor) {
    menorValor = numbers[index];
  }
}

console.log(menorValor);
