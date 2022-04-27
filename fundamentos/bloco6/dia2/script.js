const button = document.querySelector('button');
button.addEventListener('click', function(event) {
    // event.preventDefault();
    forms.onsubmit = function() {
        window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
    
    
})

const buttonsDiv = document.querySelector('#buttonsDiv');
const button2 = document.createElement('button');
buttonsDiv.appendChild(button2);
button2.innerText = 'Resetar formulário'
button2.className = 'btn';
button2.classList.add('btn-danger');
button2.addEventListener('click', function() {
    let inputs = document.querySelectorAll('input');
    inputs.push(document.querySelector('textarea'));
    for (let index = 0; index < inputs.length; index += 1) {
        inputs[index].value = '';
    }
})
