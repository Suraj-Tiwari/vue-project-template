import { getDogsList } from "./services";

export default {
  namespaced: true,
  state: {
    dogsData: [],
  },

  getters: {},
  actions: {
    async getDogsData({ commit, state }, reload) {
      try {
        if (!state.dogsData.length || reload) {
          commit("setDogsData", []);
          const response = await getDogsList();
          commit("setDogsData", response.message);
        }
      } catch (e) {
        console.log("err", e);
      }
    },
  },
  mutations: {
    setDogsData(state, dogsData) {
      state.dogsData = dogsData;
    },
  },
};
