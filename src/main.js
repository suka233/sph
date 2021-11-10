import Vue from 'vue'
import App from './App.vue'

//全局注册Icon组件
import icon from "components/Icon"
Vue.component("Icon",icon)

//全局注册星星组件
import stars from "components/Stars"
Vue.component("Stars",stars)

//全局注册轮播图组件
import carousel from 'components/Carousel'
Vue.component('Carousel',carousel)

//引入轮播图样式
import 'swiper/swiper-bundle.min.css'

//引入动效样式
import "common/css/transition.less"

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
