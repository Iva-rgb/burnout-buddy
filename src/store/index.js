import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
    chosenFeature: '',
    loggedInUser: {}
  },
  mutations: {
    SET_CHOSEN_FEATURE(state, feature) {
      state.chosenFeature = feature;
    },
    SET_LOGGED_IN_USER(state, user) {
      state.loggedInUser = user;
    },
  },
  actions: {
    setChosenFeature(context, feature) {
      context.commit('SET_CHOSEN_FEATURE', feature)
    },
    setLoggedInUser(context, user) {
      context.commit('SET_LOGGED_IN_USER', user)
    },
  },
  modules: {
  },
  getters: {
    loggedInUser: state => {
      return state.loggedInUser;
    }
  }
})
