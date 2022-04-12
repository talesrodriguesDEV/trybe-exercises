//1
function numConversor(roman) {
    let conversor = {
        I: "1",

    };
    return indoA;
}
//2
function arrayOfNumbers(vector) {
    let pares = [];
    for(let index = 0; index < vector.length; index += 1) {
        for(let index2 = 0; index2 < vector[index].length; index2 += 1) {
            if(vector[index][index2] % 2 === 0) {
                pares.push(vector[index][index2]);
            }
        }
    }
    return pares;
}
console.log(arrayOfNumbers([[1, 2, 11, 13, 14], [3,4,5,21,6,26,31], [7,8,9,40,57, 90, 83, 10]]));
//3
const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];
function fruitsPicking(basket) {
    let fruits = {
        melancia: 0,
        abacate: 0,
        uva: 0,
        laranja: 0,
        jaca: 0,
        pera: 0,
        banana: 0,
    }
    for(let index = 0; index < basket.length; index += 1) {
        let fruta = basket[index];
        switch(fruta) {
            case 'Melancia':
                fruits.melancia += 1;
                break;
            case 'Abacate':
                fruits.abacate += 1;
                break;
            case 'Uva':
                fruits.uva += 1;
                break;   
            case 'Laranja':
                fruits.laranja += 1;
                break; 
            case 'Jaca':
                fruits.jaca += 1;
                break; 
            case 'Pera':
                fruits.pera += 1;
                break; 
            case 'Banana':
                fruits.banana += 1;
                break;                  
        }
    }
    //return fruits;
    return "Sua cesta possui " + fruits.melancia + " melâncias, " + fruits.abacate + " abacates, " + fruits.uva + " uvas, " + fruits.laranja + " laranjas, " + fruits.jaca + " jacas, " + fruits.pera + " pêras e " + fruits.banana + " bananas.";
}
console.log(fruitsPicking(basket));
//4
let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };
console.log("A pessoa moradora do bloco 2 de nome " + moradores.blocoDois[1].nome + " " + moradores.blocoDois[1].sobrenome + " mora no " + moradores.blocoDois[1].andar + "º andar, apartamento " + moradores.blocoDois[1].apartamento);
//5