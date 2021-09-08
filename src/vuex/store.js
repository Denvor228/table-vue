import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: [],
        searchValue: ''
    },
    actions: {
        GET_USERS_FROM_API({commit}) {
            return axios('/db.json', {
                method: 'GET'
            })
            .then((response) => {
                commit('SET_USERS_TO_VUEX', response.data)
            })
        },
        GET_SEARCH_VALUE_TO_VUEX({commit}, value) {
            commit('SET_SEARCH_VALUE_TO_VUEX', value)
        }
    },
    mutations: {
        SET_USERS_TO_VUEX: (state, users) => {
            state.users = users
        },
        SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
            state.searchValue = value;
        }
    },
    getters: {
        USERS(state) {
            return state.users;
        },
        SEARCH_VALUE(state) {
            return state.searchValue;
        }
    }
})

export default store;