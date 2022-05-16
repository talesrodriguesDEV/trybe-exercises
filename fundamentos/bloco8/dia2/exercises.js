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

// Adicione o código do exercício aqui:

// Exercício 1
function authorBornIn1947() {
  // escreva aqui o seu código
  return books.find((element) => element.author.birthYear === 1947);
}
console.log(authorBornIn1947());

// Exercício 2
function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  books.forEach((element) => {
    if (!nameBook || element.name.length < nameBook.length) {
      nameBook = element.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
console.log(smallerName());

// Exercício 3
function getNamedBook() {
  // escreva seu código aqui
  return books.find((element) => element.name.length === 26);
}
console.log(getNamedBook());

// Exercício 4
function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
}
console.log(booksOrderedByReleaseYearDesc());

// Exercício 5
function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((element) => element.author.birthYear <= 2000 && element.author.birthYear >= 1901)
}
console.log(everyoneWasBornOnSecXX());

// Exercício 6
function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some((element) => element.releaseYear >= 1980 && element.releaseYear <= 1989);
}
console.log(someBookWasReleaseOnThe80s());

// Exercício 7
function authorUnique() {
  // escreva seu código aqui
  let answer = true;
  books.forEach((element) => {
    books.forEach((element2) => {
      if (element.author.birthYear === element2.author.birthYear && element.author.name !== element2.author.name) {
        answer = false;
      }
    });
  });
  return answer;
}
console.log(authorUnique());