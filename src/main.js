import Vue from 'vue'
import App from './App.vue'

//引入动效样式
import "../public/css/transition.less"

//路由环境
import router from 'router'

//mock
import "mock/mock"

//vuex
import store from 'store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
