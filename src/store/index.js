import Vue from 'vue'
import Vuex from 'vuex'
import collection from './modules/collection'
import footerStatus from './modules/footerStatus'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    collection,
    footerStatus
  }
})

export default store
