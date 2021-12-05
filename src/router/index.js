import Vue from 'vue';
import VueRouter from "vue-router";
import routes from 'routes';

Vue.use(VueRouter);
export default new VueRouter({
    routes,
    mode: 'history',
    //到达一个新路由的时候让它自动滚动到顶部
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})

//解决重复点击相同路由报错(只解决了push ,replace手动解决
//方案地址: https://blog.csdn.net/zhaohan___/article/details/111222333
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}