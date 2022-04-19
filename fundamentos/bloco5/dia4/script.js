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
link.addEventListener('mouseover', changeColor);
link.addEventListener('mouseleave', changeColor);
function changeColor(event) {
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
// 1

