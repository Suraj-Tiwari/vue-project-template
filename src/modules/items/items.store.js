export default {
    namespaced: true,
    state: {
        counter: 0
    },
    getters: {},
    actions: {},
    mutations: {
        incrementCounter(state) {
            state.counter += 1
        }
    }
}