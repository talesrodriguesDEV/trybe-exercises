// Parte 1 - Exercício 1
const testingScope = escopo => {
  if (escopo) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    return ifScope;
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    return elseScope;
  }
}
console.log(testingScope(false));

// Parte 1 - Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const order = array => {
  for (let index = 0; index < array.length - 1; index += 1) {
    for (let index2 = index + 1; index2 < array.length; index2 += 1) {
      if (array[index] > array[index2]) {
        let aux = array[index];
        array[index] = array[index2];
        array[index2] = aux;
      }
    }
  }
  return `Os números ${array} se encontram ordenados de forma crescente!`;
}
console.log(order(oddsAndEvens));

// Parte 2 - Exercício 1
let fatorial = n => {
  if (n < 0) return 'Entrada inválida.';
  fatorial = 1;
  for (let index = n; index >= 1; index -= 1) {
    fatorial *= index;
  }
  return fatorial;
}
console.log(fatorial(4));

// Parte 2 - Exercício 2
const longestWord = (array) => {
  let splitArray = array.split(' ');
  let longest = '';
  for (let index = 0; index < splitArray.length; index += 1) {
    if (splitArray[index].length > longest.length) {
      longest = splitArray[index];
    }
  }
  return longest;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Parte 2 - Exercício 4
const function1 = (string1 ,string2) => {
  const splitString1 = string1.split(' ');
  let stringFinal = '';
  for (let index = 0; index < splitString1.length; index += 1) {
    if (splitString1[index] === 'x') {
      splitString1[index] = string2;
    }
    stringFinal += `${splitString1[index]} `;
  }
  return stringFinal;
}
console.log(function1('Tryber x aqui!', 'Bebeto'));
const skills = ['HTML', 'CSS', 'JavaScript', 'Autoconhecimento', 'Resiliência'];
const function2 = (string) => {
  const orderSkills = skills.sort();
  return `${string}
Minhas cinco principais habilidades são: ${orderSkills}`;
}
console.log(function2(function1('Tryber x aqui!', 'Bebeto')));