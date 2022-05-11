const { encode, decode } = require('./encodeDecode');

it('Espera-se que as funções "encode" e "decode" existam', () => {
  expect(typeof encode).toBe('function');
  expect(typeof decode).toBe('function');
});

it('Espera-se que encode("aeiou") retorne "12345"', () => {
  expect(encode("aeiou")).toBe("12345");
});

it('Espera-se que decode("12345") retorne "aeiou"', () => {
  expect(decode("12345")).toBe("aeiou");
});

it('Espera-se que encode("bcdfghjklmnpqrstvwxyz") retorne "bcdfghjklmnpqrstvwxyz"', () => {
  expect(encode("bcdfghjklmnpqrstvwxyz")).toBe("bcdfghjklmnpqrstvwxyz");
})

it('Espera-se que decode("06789") retorne "06789"', () => {
  expect(decode("06789")).toBe("06789");
})

it('Espera-se que encode("aoba") retorne 4 caracteres', () => {
  expect(encode("aoba").length).toBe(4);
})

it('Espera-se que decode("1234") retorne 4 caracteres', () => {
  expect(decode("1234").length).toBe(4);
})