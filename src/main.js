import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//plugins
import './plugins/iview.js'
import { Message,Modal } from 'iview'

//svg
import './icons'

//css
import 'iview/dist/styles/iview.css'


// //derectives
// import loadmore from '@/derective/loadMore'
// Vue.use(loadmore)
Vue.config.productionTip = false

Vue.prototype.$Modal = Modal
Vue.prototype.$Message = Message

Vue.directive('load', {
  bind: function (el,binding) {
    let dom = el.querySelector('.ivu-table-body')
    console.log(binding.value)  
    dom.addEventListener('scroll',function() {
      const distance = this.scrollHeight - this.scrollTop - this.clientHeight
      if(distance <= 0) {
        binding.value()
      }
    })
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
