import React, { FormEvent, useEffect, useState } from 'react';
import { getAllPokemons, getPokemon } from '../../services/pokemons.service';

import GridPokemons from '../../components/GridPokemons'

import logoImg from '../../assets/logo.svg'

import { Title, Form, Error } from './styles';

interface Pokemon {
  id: number;
  name: string;
}


const Home: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [newPokemon, setNewPokemon] = useState('');
  const [inputError, setInputError] = useState('');

  const loadAllPokemons = async () => {
    const pokemons = await getAllPokemons();
    setPokemons(pokemons);
  }

  useEffect(() => {
    loadAllPokemons();
  }, []);

  async function handleSearchPokemon(
    event: FormEvent<HTMLFormElement>,
    ): Promise<void>{
    event.preventDefault();

    if (!newPokemon) {
      setInputError('Digite o nome de um Pokemon!');
      return;
    }
    try {
      const pokemon: Pokemon = await getPokemon(newPokemon);
      setPokemon(pokemon);
      setNewPokemon('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse Pokemon!')
    }

  }

  return (
    <>
      <img src={logoImg} alt="Pokémon Explorer" />
      <Title>Explore pokémons na Pokédex</Title>

      <Form hasError={!!inputError} onSubmit={handleSearchPokemon}>
        <input
          value={newPokemon}
          onChange={(e) => setNewPokemon(e.target.value)}
          placeholder="Digite o nome de um pokémon"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      {pokemon ?
        <h1>{pokemon.name}</h1>
        :
        <GridPokemons
          pokemons={pokemons}
        />
      }
    </>
  )
}

export default Home;
