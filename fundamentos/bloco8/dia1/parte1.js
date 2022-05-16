// Exercício 1
const func = (nomeCompleto) => {
  const email = `${nomeCompleto.toLowerCase().split(' ').join('_')}@trybe.com`;
  return { nomeCompleto, email};
};
const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'),
    id2: func('Luiza Drumond'),
    id3: func('Carla Paiva'),
  };
  return employees;
}
console.log(newEmployees(func));

// Exercício 2
const checkNumber = (chosenNumber, rightNumber) => {
  return chosenNumber === rightNumber ? `Parabéns, você ganhou!` : `Tente novamente!`;
};

const randomNumber = (chosenNumber, checkNumber) => {
  random = parseInt(Math.random() * 6);
  return checkNumber(chosenNumber, random);
}

console.log(randomNumber(3, checkNumber));

// Exercício 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'A', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (array1, array2) => {
  let points = 0;
  for (let index = 0; index < array1.length; index += 1) {
    if (array1[index] === array2[index]) {
      points += 1;
    } else if (array2[index] === 'N.A.') {
      points += 0;
    } else {
      points -= 0.5;
    }
  }
  return points;
}

const hof = (RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers) => {
  return checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS);
}

console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));