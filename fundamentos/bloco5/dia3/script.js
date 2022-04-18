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
        day.className = 'day holiday';
    }
    if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
        day.className = 'day friday';
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
    let days = document.querySelector('#days');

}
