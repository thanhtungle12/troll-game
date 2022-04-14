import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dem: 0,
  },
  getters: {
    dem: function (state) {
      return state.dem;
    }
  },
  mutations: {
    tanggiatri(state) {
      state.dem += 1;
    },
    resetgiatri(state) {
      state.dem = 0;
    }
  },
  actions: {
    tangGiaTri(context) {
      context.commit('tanggiatri')
    },
    resetGiaTri(context) {
      context.commit('resetgiatri')
    }

  },
  modules: {}
})