import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/vue-material-dashboard-2/img/team-1.0e461794.jpg',
    drawer: null,
    identifier: '',
    password: '',
    loading: false,
    disabled: false
  },
  getters: {},
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    updateIdentifier (state, identifier) {
      state.identifier = identifier
    },

    updatePassword (state, password) {
      state.password = password
    },

    setLoading (state, loading) {
      state.loading = loading
    },

    setDisabled (state, disabled) {
      state.disabled = disabled
    }
  },
  actions: {},
})
