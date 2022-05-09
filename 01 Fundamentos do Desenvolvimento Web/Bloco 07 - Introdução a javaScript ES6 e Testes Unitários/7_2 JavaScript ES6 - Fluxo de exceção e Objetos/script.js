// function sum() {
//   const value1 = document.getElementById("value1").value;
//   const value2 = document.getElementById("value2").value;
//   const result = parseInt(value1) + parseInt(value2);
//   document.getElementById("result").innerHTML = `Resultado: ${result}`;
//   document.getElementById("value1").value = "";
//   document.getElementById("value2").value = "";
//
const verificaValue = (value1, value2) => {
  if (value1 === " " || value2 === " ") {
    throw new Error(
      "São necessários dois números para que a operação seja feita!"
    );
  }
};
const soma = () => {
  const value1 = document.getElementById("value1").value;
  const value2 = document.getElementById("value2").value;
  const result = parseInt(value1) + parseInt(value2);
  const resultado = document.getElementById("result");
  document.getElementById("value1").value = " ";
  document.getElementById("value2").value = " ";
  try {
    verificaValue(value1, value2);
    resultado.innerHTML = `Resultado: ${result}`;
  } catch (error) {
    resultado.innerHTML = `Erro: ${error.message}`;
  }
};

window.onload = () => {
  const button = document.getElementById("button");
  button.addEventListener("click", soma);
};
