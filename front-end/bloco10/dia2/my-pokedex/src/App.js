import './App.css';
import Pokemon from './Pokemon';
import pokemons from './data';
import { React, Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Pokedex</h1>
        <section className='Pokemons'>
          {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
        </section>
      </div>
    );
  }
}

export default App;
