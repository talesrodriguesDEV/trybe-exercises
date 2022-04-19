const body = document.querySelector('body');
body.style.textAlign = 'center';
body.style.lineHeight = 20 + 'px';

const title = document.querySelector('h1');
title.style.marginBottom = 80 + 'px';
title.style.marginTop = 100 + 'px';
title.style.fontSize = 300 + '%';

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

