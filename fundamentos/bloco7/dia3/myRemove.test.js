const { myRemove } = require('./myRemove');

it('Espera-se que myRemove([1, 2, 3, 4], 3) retorne [1, 2, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
})

it('Espera-se que myRemove([1, 2, 3, 4], 3) NÃO retorne [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
})

it('Espera-se que myRemovemyRemove([1, 2, 3, 4], 5) retorne [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
})