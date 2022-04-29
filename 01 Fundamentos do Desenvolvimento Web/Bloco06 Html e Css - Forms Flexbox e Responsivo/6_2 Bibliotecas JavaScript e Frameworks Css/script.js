const botaoEnviar = document.querySelector("#botaoEnviar");
function interropeComportamento(event) {
  event.preventDefault();
}
botaoEnviar.addEventListener("click", interropeComportamento);
