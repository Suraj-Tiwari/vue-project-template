import {inject} from 'vue';

const getPokemonList = async () => {
  const res = await inject('axios').get('https://pokeapi.co/api/v2/pokemon?limit=100');
  return res.data;
}

const getPokemonData = async (id) => {
  const res = await inject('axios').get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return res.data;
}

export {
  getPokemonList,
  getPokemonData
}
