function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.
// 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let dezembro = document.querySelector('#days');
for (index = 0; index < dezDaysList.length; index += 1) {
    let day = document.createElement('li');
    let days = document.querySelector('#days');
    days.appendChild(day);
    day.innerText = dezDaysList[index];
    day.className = 'day';
    if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
        day.classList.add('holiday');
    }
    if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
        day.classList.add('friday');
    }
}

// 2
function holidays(nome) {
    let feriados = document.createElement('button');
    feriados.id = 'btn-holiday';
    let container = document.querySelector('.buttons-container');
    container.appendChild(feriados);
    feriados.innerText = nome;
}
holidays('Feriados');

// 3
let botao = document.querySelector('#btn-holiday');
botao.addEventListener('click', mudarCorFeriados);
function mudarCorFeriados() {
    let feriados = document.querySelectorAll('.holiday');
    for (index = 0; index < feriados.length; index += 1) {
        if (feriados[index].style.backgroundColor === 'blue') {
            // feriados[index].style.backgroundColor = rgb(238,238,238);
            feriados[index].removeAttribute('style');
        } else {
            feriados[index].style.backgroundColor = 'blue';
        }
    }
}

// 4
function friday(nome) {
    let fridays = document.createElement('button');
    fridays.id = 'btn-friday';
    let container = document.querySelector('.buttons-container');
    container.appendChild(fridays);
    fridays.innerText = nome;
}
friday('Sexta-feira');

// 5
let botao2 = document.querySelector('#btn-friday');
botao2.addEventListener('click', mudarCorSextas);
let fridayDays = [4, 11, 18, 25];
function mudarCorSextas() {
    let sextas = document.querySelectorAll('.friday');
    for (index = 0; index < sextas.length; index += 1) {
        if(sextas[index].style.color !== 'red') {
            sextas[index].innerText = 'Sextou!';
            sextas[index].style.color = 'red';
        } else {
            sextas[index].removeAttribute('style');
            sextas[index].innerText = fridayDays[index];
        }
    }
}

// 6
function zoomIn(event) {
    event.target.style.fontSize = 200 + '%';
}
function zoomOut(event) {
    event.target.style.fontSize = 100 + '%';
}
for (index = 0; index < dezDaysList.length; index += 1) {
    let days = document.querySelectorAll('.day');
    days[index].addEventListener('mouseover', zoomIn);
    days[index].addEventListener('mouseleave', zoomOut);
}

// 7
function addNewTask(string) {
    let newTask = document.createElement('span');
    let container = document.querySelector('.my-tasks');
    container.appendChild(newTask);
    newTask.innerText = string;
}
addNewTask('Cozinhar');

// 8
function addColor(cor) {
    let legenda = document.createElement('div');
    legenda.className = 'task';
    legenda.style.backgroundColor = cor;
    let container = document.querySelector('.my-tasks');
    container.appendChild(legenda);
}
addColor('red');