import {getAllTodos, getTodoById} from './services'

export default {
    namespaced: true,
    state: {
        todos: []
    },
    getters: {},
    actions: {
        async getTodos({commit, state}, reload) {
            try {
                // Only fetch if state is empty of reload is required
                if (!state.todos.length || reload) {
                    commit('setTodos', [])
                    const todosList = await getAllTodos();
                    commit('setTodos', todosList)
                }
            } catch (e) {
                console.log("todos failed")
            }
        },
        async getTodosById(context, id) {
            if (context.state.todos && context.state.todos.length){
                return context.state.todos.find((x) => x.id === id);
            }
            try {
                return await getTodoById(id);
            } catch (e) {
                console.log("get by id failed")
            }
        }
    },
    mutations: {
        setTodos(state, todos) {
            state.todos = todos
        }
    }
}
