// Exercício 5
const { upperCase } = require('./upperCase');

test('A função upperCase("aoba") deve retornar "AOBA"', (done) => {
  upperCase('aoba', (str) => {
    try {
      expect(str).toBe('AOBA');
      done();
    } catch (error) {
      done(error);
    }
  });
});