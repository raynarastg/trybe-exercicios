const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
};

testingScope(true);

//https://www.w3schools.com/jsref/jsref_sort.asp
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenados = oddsAndEvens.sort(function (a, b) {
  return a - b;
});

console.log(
  `Os números ${ordenados} se encontram ordenados de forma crescente!`
);
//retorna fatorial
function fatorial(n) {
  let numero = 1;
  for (let i = n; i > 1; i -= 1){
    numero = numero * i;
  }
  return numero;
}
console.log(fatorial(5))
//retorna fatorial ternary
const fatorialTernary = number => number > 1 ? number * fatorialTernary(number-1): 1

console.log(fatorialTernary(5))
//retorna fatorial recursivo
function fatorialRecursivo(number){
  if(number>1){
    return number * fatorialRecursivo(number-1)
  }
  else{
    return number
  }
}

console.log(fatorialRecursivo(1));
//Crie uma função que receba uma frase e retorne qual a maior palavra.

function longestWord(string){
  let arrayString = string.split(' ');
  let maior = arrayString[0];
  for (i of arrayString){
    if(i.length > maior.length){
      maior = i
    } 
    }
  return maior
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))
