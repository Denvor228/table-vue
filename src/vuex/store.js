import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currencies: [],
        searchValue: ''
    },
    actions: {
        GET_CURRENCIES_FROM_API({commit}) {
            return axios('/db.json', {
                method: 'GET'
            })
            .then((response) => {
                commit('SET_CURRENCIES_TO_VUEX', response.data)
            })
        },
        GET_SEARCH_VALUE_TO_VUEX({commit}, value) {
            commit('SET_SEARCH_VALUE_TO_VUEX', value)
        }
    },
    mutations: {
        SET_CURRENCIES_TO_VUEX: (state, currencies) => {
            state.currencies = currencies
        },
        SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
            state.searchValue = value;
        }
    },
    getters: {
        CURRENCIES(state) {
            return state.currencies;
        },
        SEARCH_VALUE(state) {
            return state.searchValue;
        }
    }
})

export default store;