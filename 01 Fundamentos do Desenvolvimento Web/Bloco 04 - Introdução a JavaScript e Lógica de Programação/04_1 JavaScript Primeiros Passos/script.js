//exercicio 1
const a = 6;
const b = 4;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
//exercicio 2
const dois = 105;
const um = 140;
if (um > dois) {
  console.log(um);
} else {
  console.log(dois);
}
//exercicio 3
const primeira = 12;
const segunda = 15;
const terceira = 9;
if (primeira > segunda && terceira) {
  console.log(primeira);
} else if (segunda > primeira && terceira) {
  console.log(segunda);
} else {
  console.log(terceira);
}
//exercicio 4
const valor = 107;
if (valor > 0) {
  console.log("positive");
} else if (valor < 0) {
  console.log("negative");
} else {
  console.log("zero");
}
//exercicio 5
const lado1 = 60;
const lado2 = 50;
const lado3 = 70;
if (lado1 + lado2 + lado3 == 180 && lado1 > 0 && lado2 > 0 && lado3 > 0) {
  console.log(true);
} else {
  console.log(false);
}
//exercicio 6
let peca = "Rainha";
peca = peca.toLowerCase();
switch (peca) {
  case "rainha":
    console.log("fileiras, colunas, diagonal");
    break;
  case "bispo":
    console.log("diagonal");
    break;
  case "cavalo":
    console.log("L");
    break;
  default:
    console.log("erro");
}
//exercicio 7
let nota = 90;
if (nota >= 90 && nota <= 100) {
  console.log("A");
} else if (nota >= 80 && nota <= 100) {
  console.log("B");
} else if (nota >= 70 && nota <= 100) {
  console.log("C");
} else if (nota >= 60 && nota <= 100) {
  console.log("D");
} else if (nota >= 50 && nota <= 100) {
  console.log("E");
} else if (nota < 50 && nota >= 0) {
  console.log("F");
} else {
  console.log("ERRO");
}
//exercicio 8
const number1 = 5;
const number2 = 7;
const number3 = 2;

if (number1 % 2 == 0 || number2 % 2 == 0 || number3 % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}
//exercicio 9
const number4 = 6;
const number5 = 7;
const number6 = 2;

if (number4 % 2 == 1 || number5 % 2 == 1 || number6 % 2 == 1) {
  console.log(true);
} else {
  console.log(false);
}
//exercicio 10
const valorCusto = 100;
const valorVenda = 140;

var valorCustoTotal = valorCusto + (20 / 100) * valorCusto;

if (valorCusto < 0 || valorVenda < 0) {
  console.log("erro");
} else {
  var lucro = valorVenda - valorCustoTotal;
  var lucroTotal = lucro * 1000;
  console.log(lucroTotal);
}
