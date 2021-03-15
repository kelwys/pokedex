import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { getPokemon } from '../../services/pokemons.service';

import logoImg from '../../assets/logo.svg';

import { Header, PokemonInfo } from './styles';

interface PokemonParams {
  pokemon: string;
}

interface Pokemon {
  id: number;
  name: string;
  description: string;
  height: number;
  weight: number;
  base_experience: number;
  types: Array<Type>;
}

interface Type {
  type: {name: string;};
}

const Pokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const { params } = useRouteMatch<PokemonParams>();

  const loadPokemon = async () => {
    const pokemon = await getPokemon(params.pokemon);
    setPokemon(pokemon);
  }

  useEffect(() => {
    loadPokemon();
  }, [params.pokemon]); // eslint-disable-line

  return(
    <>
      <Header>
        <img src={logoImg} alt="Pokedex" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {pokemon && (
        <PokemonInfo>
          <header>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
            <div>
              <strong>{pokemon.name.toUpperCase()} #
              {pokemon.id.toString().padStart(3, '0')}</strong>
              {pokemon.types.map(type => (
                <span key={pokemon.id}>{type.type.name.toUpperCase()}</span>
                )
              )}
              <p>{pokemon.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{pokemon.height}m</strong>
              <span>Height</span>
            </li>
            <li>
              <strong>{pokemon.weight}kg</strong>
              <span>Weight</span>
            </li>
            <li>
              <strong>{pokemon.base_experience}xp</strong>
              <span>Base XP</span>
            </li>
          </ul>
        </PokemonInfo>
      )}
    </>
  );
}

export default Pokemon;
