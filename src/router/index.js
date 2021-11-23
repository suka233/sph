import Vue from 'vue';
import VueRouter from "vue-router";
import routes from 'routes';

Vue.use(VueRouter);
export default new VueRouter({
    routes,
    mode:'history'
})

//解决重复点击相同路由报错(只解决了push ,replace手动解决
//方案地址: https://blog.csdn.net/zhaohan___/article/details/111222333
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}