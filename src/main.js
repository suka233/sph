import Vue from 'vue'
import App from './App.vue'

//定义总线
Vue.prototype.$bus = new Vue()

//全局注册分页组件
import Pagination from "components/Pagination"
Vue.component("Pagination",Pagination)

//全局注册Icon组件
import Icon from "components/Icon"
Vue.component("Icon",Icon)

//全局注册星星组件
import Stars from "components/Stars"
Vue.component("Stars",Stars)

//全局注册轮播图组件
import Carousel from 'components/Carousel'
Vue.component('Carousel',Carousel)

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
