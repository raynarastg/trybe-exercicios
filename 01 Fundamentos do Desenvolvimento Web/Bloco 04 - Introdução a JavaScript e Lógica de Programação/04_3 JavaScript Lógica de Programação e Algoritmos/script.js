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
