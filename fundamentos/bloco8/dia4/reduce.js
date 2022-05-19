// Exercício 1
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];
const flatten = (array) => {
  return array.reduce((acc, item1) => {
    item1.forEach((item2) => acc.push(item2));
    return acc;
  }, []);
}
console.log(flatten(arrays));

const flatten2 = (array) => array.reduce((finalArray, item) => finalArray.concat(item), []);
console.log(flatten2(arrays));

// Exercícios 2, 3 e 4
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Exercício 2
const reduceNames = (array) => array.reduce((string, obj) =>  `${string} ${obj.author.name},`, '');
console.log(reduceNames(books));

const reduceNames2 = (array) => {
  const names = array.reduce((string, book, index, fullArray) => {
    if (index === fullArray.length - 1) {
      return `${string} ${book.author.name}.`
    }
    return `${string} ${book.author.name},`;
  }, '');
  return names;
}
console.log(reduceNames2(books));

// Exercício 3
const averageAge = (books.reduce((sum, book) => sum + book.releaseYear - book.author.birthYear, 0)) / books.length;
console.log(averageAge);

// Exercício 4
const longestNamedBook = books.reduce((bigger, book) => {
  if (book.name.length > bigger.name.length) {
    return book;
  }
  return bigger;
});
console.log(longestNamedBook);

// Exercício 5
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (array) => {
  return array.reduce((contador, name) => 
    contador + name.split('').reduce((letrasA, letra) => {
      if (letra === 'A' || letra === 'a') {
        return letrasA + 1;
      }
      return letrasA;
    }, 0), 0)
}
console.log(containsA(names));

// Exercício 6
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (studentsNames, studentsGrades) => {
  return studentsNames.map((name, index) => {
    const object = {};
    object['name'] = name;
    object['average'] = (studentsGrades[index].reduce((somaNotas, nota) => somaNotas + nota, 0)) / studentsGrades[index].length;
    return object;
  })
}

console.log(studentAverage(students, grades));