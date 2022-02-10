import {getPokemonData, getPokemonList} from './services'

export default {
  namespaced: true,
  state: {
    pokemons: []
  },
  getters: {},
  actions: {
    async getPokemons({commit, state}, reload) {
      try {
        // Only fetch if state is empty of reload is required
        if (!state.pokemons.length || reload) {
          commit('setPokemons', [])
          const response = await Promise.all(await getPokemonList().then((y) => y.results.map((x) => getPokemonData(x.name))))
          commit('setPokemons', response)
        }
      } catch (e) {
        console.log("setPokemons failed")
      }
    },
    async getPokemonById(context, id) {
      try {
        return await getPokemonData(id);
      } catch (e) {
        console.log("get by id failed")
      }
    }
  },
  mutations: {
    setPokemons(state, pokemons) {
      state.pokemons = pokemons
    }
  }
}
