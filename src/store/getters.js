const getters = {
  visitedViews: state => state.user.fixedHeader,
  sidebar: state => state.app.sidebar,
  currentPath: state => state.app.currentPath,
}
export default getters