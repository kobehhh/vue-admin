const state = {
  fixedHeader:false,
  needTagsView:false
}
const mutations = {
  setFixedHeader:(state,data) => {
    state.fixedHeader = data
  },
  setNeedTagsView:(state,data) => {
    state.needTagsView = data
  }
}
const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}