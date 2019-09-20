const state = {
  sidebar:false,
  currentPath:''
}
const mutations = {
  setSidebar:(state,data) => {
    state.sidebar = data
  },
  setCurrentPath:(state,url) => {
    state.currentPath = url
  },
}
const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}