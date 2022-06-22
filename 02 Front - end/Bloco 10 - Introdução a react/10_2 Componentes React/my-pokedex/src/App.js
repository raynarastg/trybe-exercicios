import React from 'react';
import './App.css';
import pokemons from './data'
import Pokedex from './Pokedex'

class App extends React.Component{
  render() {
    return (
      <div id="div-body">
        <h1 className="h1"> Pokedex </h1>
        <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
