import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//plugins
import './plugins/iview.js'
import { Message,Modal } from 'iview'

//css
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.prototype.$Modal = Modal
Vue.prototype.$Message = Message

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
