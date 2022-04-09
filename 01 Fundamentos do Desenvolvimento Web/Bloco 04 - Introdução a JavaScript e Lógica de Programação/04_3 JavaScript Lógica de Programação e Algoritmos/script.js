//exercicio 1
var fatorial = 10;
var resultado = fatorial;
for (var index = 1; index < fatorial; index++) {
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

for (let index = 0; index < array.length; index++) {
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  }
}
console.log(maiorPalavra);

for (let index = 0; index < array.length; index++) {
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  }
}
console.log(menorPalavra);
