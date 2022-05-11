const { isTypedArray } = require('util/types');
const { sum } = require('./sum');

it('Espera-se que a soma de 4 e 5 seja 9', () => {
  expect(sum(4, 5)).toBe(9);
});

it('Espera-se que a soma de 0 e 0 seja 0', () => {
  expect(sum(0, 0)).toBe(0);
});

it('Espera-se que a soma de 4 e "5" retorne um erro', () => {
  expect(() => sum(4, "5")).toThrow(Error);
});

it('Espera-se que a soma de 4 e "5" retorne o erro "parameters must be numbers"', () => {
  expect(() => sum(4, "5")).toThrow('parameters must be numbers');
});