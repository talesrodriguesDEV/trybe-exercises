const button = document.querySelector('button');
button.addEventListener('click', function(event) {
    // event.preventDefault();
    forms.onsubmit = function() {
        window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
    
    
})

const forms = document.querySelector('form');
const button2 = document.createElement('button');
forms.appendChild(button2);
button2.innerText = 'Resetar formulário'
button2.addEventListener('click', function() {
    let inputs = document.querySelectorAll('input');
    inputs.push(document.querySelector('textarea'));
    for (let index = 0; index < inputs.length; index += 1) {
        inputs[index].value = '';
    }
})
