import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import home from './modules/home'
import search from "./modules/search"
import detail from "./modules/detail"
import cart from "./modules/cart"

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        home,
        search,
        detail,
        cart
    }
})