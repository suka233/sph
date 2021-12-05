import {getDetail} from 'http'

export default {
    state: {
        detail: {}
    },
    mutations: {
        getDetail(state,detail){
            state.detail = detail
        }
    },
    actions: {
        //获取商品列表
        async getDetail({commit},skuId){
            const {data} = await getDetail(skuId)
            commit('getDetail',data)
        }
    },
    getters: {
        categoryView(state){
            return state.detail.categoryView ? state.detail.categoryView : ""
        },
        skuInfo(state){
            return state.detail.skuInfo ? state.detail.skuInfo : ""
        }
    }
}