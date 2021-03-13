import api from './api';

export const getAllPokemons = async () => {
  const response = (await api.get(`pokemon?limit=151`));
  const data = response.data.results.map((pokemon:any, idx: any) => {
    return {
      id: idx + 1,
      name: pokemon.name
    };
  });
  return data;
};
