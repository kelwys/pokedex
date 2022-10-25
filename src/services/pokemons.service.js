import api from './api';

export const getAllPokemons = async () => {
  const response = (await api.get(`pokemon?limit=151`));
  const data = response.data.results.map((pokemon, idx) => {
    return {
      id: idx + 1,
      name: pokemon.name,
      isFavorite: 'favorite-default'
    };
  });
  return data;
};

export const getPokemon = async (newPokemon) => {
  const [{ data }, { data: species }] = await Promise.all([
    api.get(`/pokemon/${newPokemon}`),
    api.get(`/pokemon-species/${newPokemon}`),
  ]);

  const description = species.flavor_text_entries.findIndex(entries => {
    return entries.language.name === 'en' && entries.version.name === 'y';
  });
  data.description = description > 0 ?
    species.flavor_text_entries[description].flavor_text : '';

  return data;
};
