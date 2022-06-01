const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}!`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', (error, message) => message ? console.log(message) : console.log(error));

getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', (error, message) => message ? console.log(message) : console.log(error));

module.exports = {
  getPokemonDetails,
};