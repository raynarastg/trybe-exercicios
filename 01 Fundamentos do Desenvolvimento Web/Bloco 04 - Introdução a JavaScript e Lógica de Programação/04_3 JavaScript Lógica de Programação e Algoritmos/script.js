//exercicio 1
var fatorial = 10;
var resultado = fatorial;
for (var index = 1; index < fatorial; index += 1) {
  resultado *= index;
}
console.log(resultado);
//exercicio 2
let word = "tryber";
let reverso = "";
reverso = word.split("").reverse().join("");
console.log(reverso);
//exercicio 3
let array = ["java", "javascript", "python", "html", "css"];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  }
}
console.log(maiorPalavra);

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  }
}
console.log(menorPalavra);
// exercicio 4
let maiorNumeroPrimo = 0;
for (let numeroAtual = 0; numeroAtual <= 50; numeroAtual += 1) {
  let numeroPrimo = true;
  for (let numeroDivisor = 2; numeroDivisor < numeroAtual; numeroDivisor += 1) {
    if (numeroAtual % numeroDivisor === 0) {
      numeroPrimo = false;
    }
  }
  if (numeroPrimo) {
    maiorNumeroPrimo = numeroAtual;
  }
}
console.log(maiorNumeroPrimo);
