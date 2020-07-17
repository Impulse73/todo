import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
    },
    mutations: {
        setTask(state, data) {
            state.list.push(data)
        },
        editTask(state, data) {
            state.list[data.key.id - 1] = data
        },
        deleteTask(state, data) {
            state.list[data - 1].value.isDeleted = true
        }
    },
    actions: {
        setTask(context, data) {
            context.commit('setTask', data)
        },
        editTask(context, data) {
            context.commit('editTask', data)
        },
        deleteTask(context, data) {
            context.commit('deleteTask', data)
        }
    },
    getters: {
        getIdList(state) {
            return state.list.length
        },
        getList(state) {
            return state.list
        }
    }
})
