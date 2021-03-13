import React, { useEffect, useState } from 'react';
import { getAllPokemons } from '../../services/pokemons.service';

import logoImg from '../../assets/logo.svg'

import { Title, Form, Grid } from './styles';

interface Pokemon {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);


  const loadAllPokemon = async () => {
    const pokemons = await getAllPokemons();
    setPokemons(pokemons);
  }

  useEffect(() => {
    loadAllPokemon();
  }, []);

  return (
    <>
      <img src={logoImg} alt="Pokémon Explorer" />
      <Title>Explore pokémons na Pokédex</Title>

      <Form>
        <input placeholder="Digite o nome de um pokémon" />
        <button type="submit">Pesquisar</button>
      </Form>

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
    </>
  )
}

export default Home;
