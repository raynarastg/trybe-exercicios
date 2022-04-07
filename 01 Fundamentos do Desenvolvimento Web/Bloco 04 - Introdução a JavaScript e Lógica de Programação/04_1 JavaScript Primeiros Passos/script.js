const a = 6;
const b = 4;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

const dois = 105;
const um = 140;
if (um > dois) {
  console.log(um);
} else {
  console.log(dois);
}

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

const valor = 107;

if (valor > 0) {
  console.log("positive");
} else if (valor < 0) {
  console.log("negative");
} else {
  console.log("zero");
}
const lado1 = 60;
const lado2 = 50;
const lado3 = 70;

if (lado1 + lado2 + lado3 == 180 && lado1 > 0 && lado2 > 0 && lado3 > 0) {
  console.log(true);
} else {
  console.log(false);
}

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
