import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
    chosenFeature: '',
  },
  mutations: {
     SET_CHOSEN_FEATURE(state, feature) {
      state.chosenFeature = feature;
    }
  },
  actions: {
    setChosenFeature(context, feature) {
      context.commit('SET_CHOSEN_FEATURE', feature)
    }
  },
  modules: {
  },
})
