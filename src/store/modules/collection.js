const state = {
  collects: []
}

const getters = {
  renderCollects (state) {
    return state.collects
  }
}

const mutations = {
  pushCollects (item) {
    state.collects.push(item)
  }
}

const actions = {
  invokeCollects (context, item) {
    context.commit('pushCollects', item)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
