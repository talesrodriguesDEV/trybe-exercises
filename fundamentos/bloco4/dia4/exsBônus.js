//1
function numConversor(roman) {
    let conversor = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let indoA = 0;
    for(index = 0; index < roman.length; index += 1) {
        if(roman[index] === "I" && roman[index + 1] !== "V" && roman[index + 1] !== "X"){
            indoA += 1;
        }
        if(roman[index] === "I" && roman[index + 1] === "V") {
            indoA += 4;
        }
        if(roman[index] === "I" && roman[index + 1] === "X") {
            indoA += 9;
        }
        if(roman[index] === "V" && roman[index - 1] !== "I"){
            indoA += 5;
        }
        if(roman[index] === "X" && roman[index - 1] !== "I" && roman[index + 1] !== "L" && roman[index + 1] !== "C"){
            indoA += 10;
        }
        if(roman[index] === "L" && roman[index - 1] !== "X") {
            indoA += 50;
        }
        if(roman[index] === "L" && roman[index - 1] === "X") {
            indoA += 40;
        }
    }
    return indoA;
}
console.log(numConversor(""));
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
console.log("Pessoas moradoras do bloco 1:");
for(index = 0; index < moradores.blocoUm.length; index += 1) {
    console.log(moradores.blocoUm[index].nome + " " + moradores.blocoUm[index].sobrenome);
}
console.log("Pessoas moradoras do bloco 2:");
for(index = 0; index < moradores.blocoDois.length; index += 1) {
    console.log(moradores.blocoDois[index].nome + " " + moradores.blocoDois[index].sobrenome);
}