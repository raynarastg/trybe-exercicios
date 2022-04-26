function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function diasMes() {
  let diasLista = document.querySelector("#days");

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let dayLi = document.createElement("li");

    if (day === 24 || day === 31) {
      dayLi.className = "day holiday";
      dayLi.innerHTML = day;
      diasLista.appendChild(dayLi);
    } else if (day === 4 || day === 11 || day === 18) {
      dayLi.className = "day friday";
      dayLi.innerHTML = day;
      diasLista.appendChild(dayLi);
    } else if (day === 25) {
      dayLi.className = "day holiday friday";
      dayLi.innerHTML = day;
      diasLista.appendChild(dayLi);
    } else {
      dayLi.innerHTML = day;
      dayLi.className = "day";
      diasLista.appendChild(dayLi);
    }
  }
}

diasMes();

//exercício 2
function criaBotao(botaoFeriado) {
  let botao = document.createElement("button");
  let botaoID = "btn-holiday";
  let div = document.querySelector(".buttons-container");

  botao.innerHTML = botaoFeriado;
  botao.id = botaoID;
  div.appendChild(botao);
}
console.log(criaBotao("Feriados"));

//exercício 3
function eventClick() {
  let eventBotao = document.getElementById("btn-holiday");
  let diasFeriados = document.getElementsByClassName("holiday");
  let backgroundColor = "rgb(238,238,238)";
  let colorClean = "white";

  eventBotao.addEventListener("click", function () {
    for (let i = 0; i < diasFeriados.length; i += 1) {
      if (diasFeriados[i].style.backgroundColor == colorClean) {
        diasFeriados[i].style.backgroundColor = backgroundColor;
      } else {
        diasFeriados[i].style.backgroundColor = colorClean;
      }
    }
  });
}
eventClick();

//exercício 4

function string(friday) {
  let botaoFriday = document.createElement("button");
  let botaoFridayID = "btn-friday";
  let div = document.querySelector(".buttons-container");

  botaoFriday.innerHTML = friday;
  botaoFriday.id = botaoFridayID;
  div.appendChild(botaoFriday);
}
console.log(string("Sexta-Feira"));

//exercício 5
function eventClickFriday() {
  let sextasNumbers = [4, 11, 18, 25];
  let eventFriday = document.getElementById("btn-friday");
  let sextas = document.getElementsByClassName("friday");
  let textoFriday = "is friday day";
  eventFriday.addEventListener("click", function () {
    for (let i = 0; i < sextas.length; i += 1) {
      if (sextas[i].innerHTML !== textoFriday) {
        sextas[i].innerHTML = textoFriday;
      } else {
        sextas[i].innerHTML = sextasNumbers[i];
      }
    }
  });
}
eventClickFriday();

//exercício 6
function mouseOver() {
  let dias = document.querySelector("#days");

  dias.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "35px";
    event.target.style.fontWeight = "700";
  });
}

function mouseOut() {
  let dias = document.querySelector("#days");

  dias.addEventListener("mouseout", function (event) {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "100";
  });
}
mouseOver();
mouseOut();

//exercício 7
// function strr(tarefa) {
//   let divTasksContainer = document.getElementsByClassName("my-tasks");
//   let tasks = document.createElement("span");

//   tasks.innerHTML = tarefa;
//   divTasksContainer.appendChild(tasks);
// }
// strr("atividade");
// //exercício 8
// function divColor(cor) {
//   let divTasksContainer = document.getElementsByClassName("my-tasks");
//   let taskDiv = document.createElement("div");

//   taskDiv.className = "task";
//   taskDiv.style.backgroundColor = cor;
//   divTasksContainer.appendChild(taskDiv);
// }
// divColor("red");
