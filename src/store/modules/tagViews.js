const state = {
  visitedViews: [],  
}
const mutations = {
  addVisitedViews:(state,view) => {
    if(state.visitedViews.some(v => v.path === view.path)) return
    state.visitedViews.push(
      Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      })
    )
  },
  // delVisitedViews:(state,url) => {
  //   state.currentPath = url
  // },
}
const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}