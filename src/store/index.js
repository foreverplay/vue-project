import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT_COUNT, DECREMENT_COUNT, DECREMENT_COUNT_ASYNC} from './mutation-types'

Vue.use(Vuex)

const state = {
  count: 0
}
const getters = {
  single: state => {
    return state.count
  },
  double: state => {
    return (state.count * 2)
  }
}
const mutations = {
  [INCREMENT_COUNT] (state) {
    state.count++
  },
  [DECREMENT_COUNT] (state) {
    state.count--
  }
}
function wait (ms) {
  return new Promise(resolve => { setTimeout(resolve, ms) })
}
const actions = {
  async [DECREMENT_COUNT_ASYNC] ({ commit }) {
    commit(INCREMENT_COUNT, await wait(1000))
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
