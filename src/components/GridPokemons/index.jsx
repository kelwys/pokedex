import React from 'react';

import { Grid } from './styles';


const GridPokemons = ({ pokemons })  => {
  return (
    <Grid>
        <div className="container">
          {pokemons.map(pokemon => (
            <div className="content" key={pokemon.name}>
              <a href="#">
                <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                />
              </a>
              <div>
                <strong>{pokemon.name}</strong>
              </div>
            </div>
          ))}
        </div>
    </Grid>
  );
}

export default GridPokemons;
