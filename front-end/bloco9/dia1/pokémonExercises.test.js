// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./pokémonsExercises");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedError = new Error('Não temos esse pokémon para você :(');
    const callback = (error, r) => {
      expect(error).toEqual(expectedError);
      done();
    };
    getPokemonDetails((pokemon) => pokemon.name === 'Snorlax', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedString = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun!'
    const callback = (e, result) => {
      expect(result).toBe(expectedString);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', callback);
  });
});