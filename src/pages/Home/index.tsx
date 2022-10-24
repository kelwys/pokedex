import React, { FormEvent, useEffect, useState } from 'react'; // eslint-disable-line
import { getAllPokemons, getPokemon } from '../../services/pokemons.service';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import GridPokemons from '../../components/GridPokemons'

import logoImg from '../../assets/logo.svg'

import { Title, Form, ResultSearch, Error } from './styles';

interface Pokemon {
  id: number;
  name: string;
  isFavorite: string;
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
    const favoritesStorage = JSON.parse(localStorage.getItem('favorites') || '{}');

    if (favoritesStorage.length > 3){
      setPokemons(favoritesStorage)
    } else {
      loadAllPokemons();
    }
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
      const pokemon: Pokemon = await getPokemon(newPokemon.toLowerCase());
      setPokemon(pokemon);
      setNewPokemon('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse Pokemon!')
    }

  }
  const handleFavorite = (event: any, pokemon: any) => {
    const favorites = []
    for (let i = 0; i < pokemons.length; i ++) {
      if(pokemons[i].id == pokemon.id) {
        if(pokemons[i].isFavorite == 'favorite-default'){
          pokemons[i].isFavorite = 'favorited'
        } else {
          pokemons[i].isFavorite = 'favorite-default'
        }
      }
      favorites.push(pokemons[i])
  }
    setPokemons(favorites)
    localStorage.setItem('favorites', JSON.stringify(favorites))
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
        <ResultSearch>
          <Link key={pokemon.name}
            to={`/pokemon/${pokemon.name}`}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
            <div>
              <strong>{pokemon.name.toUpperCase()} #
              {pokemon.id.toString().padStart(4, '0')}</strong>
            </div>
            <FiChevronRight size={20} />
          </Link>
        </ResultSearch>
        :
        <GridPokemons
          pokemons={pokemons}
          handleFavorite={ handleFavorite }
        />
      }
    </>
  )
}

export default Home;
