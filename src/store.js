import Vue from 'vue'
import Vuex from 'vuex'
import ui from './components/Modules/ui'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ui
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  strict: debug
})
