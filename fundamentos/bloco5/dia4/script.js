const body = document.querySelector('body');
body.style.textAlign = 'center';
body.style.lineHeight = 20 + 'px';
body.style.margin = 0;
body.style.width = 1041 + 'px';
body.style.height = 796 + 'px';
body.style.marginLeft = 25 + '%';

const title = document.querySelector('h1');
title.style.marginBottom = 60 + 'px';
title.style.marginTop = 50 + 'px';
title.style.fontSize = 300 + '%';
// title.style.border = 2 + 'px solid red';

const link = document.querySelector('a');
link.style.textDecoration = 'none';
link.style.color = 'black';
link.addEventListener('mouseover', changeLinkColor);
link.addEventListener('mouseleave', changeLinkColor);
function changeLinkColor(event) {
    if (event.target.style.color === 'black') {
        event.target.style.color = 'blue';
    } else {
        event.target.style.color = 'black';
    }
}

const rodafoot = document.querySelector('footer');
rodafoot.style.marginTop = 80 + 'px';
rodafoot.style.clear = 'center';
// rodafoot.style.border = 2 + 'px solid red';

const section = document.querySelector('section');
// section.style.border = 2 + 'px solid red';
section.style.width = 80 + '%';
section.style.display = 'inline-block';
section.style.marginTop = 0;

const nav = document.querySelector('nav');
nav.style.border = 2 + 'px solid black';
nav.style.borderRadius = 10 + 'px';
nav.style.width = 185 + 'px';
nav.style.height = 616 + 'px';
// nav.style.border = 2 + 'px solid red';
nav.style.display = 'inline-block';
nav.style.float = 'right';
nav.style.marginRight = 10 + 'px';

const div = document.querySelectorAll('div');
for (index = 0; index < div.length; index += 1) {
    div[index].style.marginTop = 30 + 'px';
    div[index].style.marginBottom = 30 + 'px';
}

const input = document.querySelectorAll('input');
for (index = 0; index < input.length; index += 1) {
    input[index].style.width = 50 + '%'; 
}

const label = document.querySelectorAll('label');
for (index = 0; index < label.length; index += 1) {
    label[index].style.display = 'block';
    label[index].style.marginBottom = 10 + 'px';
    label[index].style.marginLeft = 5 + 'px';
    label[index].style.marginRight = 5 + 'px';
}

// Requisitos
window.onload = function () {
    initialRenderization();
}
function initialRenderization() {
    body.style.backgroundColor = localStorage.getItem('corDeFundo');
    body.style.color = localStorage.getItem('CorTexto');
    body.style.fontSize = localStorage.getItem('TamanhoDoTexto') + 'px';
    body.style.lineHeight = localStorage.getItem('AlturaDasLinhas') + 'px';
}

// 1
let BackgroundColorInput = document.querySelector('#color');
BackgroundColorInput.addEventListener('keyup', changeBackgroundColor);
function changeBackgroundColor() {
    body.style.backgroundColor = BackgroundColorInput.value;
    localStorage.setItem('corDeFundo', BackgroundColorInput.value);
}
// localStorage.removeItem('corDeFundo');

// 2
let textColorInput = document.querySelector('#text-color');
textColorInput.addEventListener('keyup', changeTextColor);
function changeTextColor() {
    body.style.color = textColorInput.value;
    localStorage.setItem('CorTexto', textColorInput.value);
}

// 3
let fontSizeInput = document.querySelector('#text-font-size');
fontSizeInput.addEventListener('keyup', changeTextFontSize);
function changeTextFontSize() {
    body.style.fontSize = fontSizeInput.value + 'px';
    localStorage.setItem('TamanhoDoTexto', fontSizeInput.value);
}

// 4
let lineHeightInput = document.querySelector('#text-height');
lineHeightInput.addEventListener('keyup', changeTextLineHeight);
function changeTextLineHeight() {
    body.style.lineHeight = lineHeightInput.value + 'px';
    localStorage.setItem('AlturaDasLinhas', lineHeightInput.value);
}