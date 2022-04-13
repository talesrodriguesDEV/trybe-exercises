/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 1.Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 2.Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 3.Crie uma função que mude a cor do quadrado vermelho para branco.
 4.Crie uma função que corrija o texto da tag <h1>.
 5.Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 6.Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
//1
function futuro2anos() {
    document.querySelector('p').innerText = 'Daqui a dois anos, espero estar muito bem empregado e morando na minha própria casa em outra cidade.';
}
futuro2anos();
//2
function mudarCorFundo(selector, cor) {
    document.querySelector(selector).style.backgroundColor = cor;
}
mudarCorFundo('.main-content', 'rgb(76,164,109)');
//3
mudarCorFundo('.main-content .center-content', 'white');
//4
function alterarTexto(selector, novoTexto) {
    document.querySelector(selector).innerText = novoTexto;
}
alterarTexto('header h1', 'Exercício 5.1 - JavaScript');
//5
function textUpperCase(selector) {
    let lowerCase = document.querySelector(selector).innerText;
    let upperCase = lowerCase.toUpperCase();
    document.querySelector(selector).innerText = upperCase;
}
textUpperCase('p');
//6
function consolarTexto(selector) {
    for(index = 0; index < document.querySelectorAll(selector).length; index += 1) {
        console.log(document.querySelectorAll(selector)[index].innerText);
    }
}
consolarTexto('p');