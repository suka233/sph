import {getGoods} from 'http'

export default {
    state: {
        goods:[]
    },
    mutations: {
        getGoods(state,goods){
            state.goods = goods
        }
    },
    actions: {
        //获取商品列表
        async getGoods({commit},body){
            const {data} = await getGoods(body)
            commit('getGoods',data)
        }
    },
    getters: {}
}