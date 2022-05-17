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
const formatedBookNames = () => books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
console.log(formatedBookNames());

// Exercício 2
const nameAndAge = () => books.map((book) => ({ age: book.releaseYear - book.author.birthYear, author: book.author.name })).sort((bookA, bookB) => bookA.age - bookB.age);
console.log(nameAndAge());

// Exercício 3
const fantasyOrScienceFiction = () => books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
console.log(fantasyOrScienceFiction());

// Exercício 4
const oldBooksdOrdered = () => books.filter((book) => 2022 - book.releaseYear > 60).sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
console.log(oldBooksdOrdered());

// Exercício 5
const authors = () => fantasyOrScienceFiction().map((book) => book.author.name).sort();
console.log(authors());

// Exercício 6
const oldBooks = () => books.filter((book) => 2022 - book.releaseYear > 60).map((book) => book.name);
console.log(oldBooks());

// Exercício 7
const authorWith3DotsOnName = () => books.filter((book) => book.author.name === 'J. R. R. Tolkien').map(((book) => book.name));
console.log(authorWith3DotsOnName());