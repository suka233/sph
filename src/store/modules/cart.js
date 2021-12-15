import {addToCart, getCartList} from 'http'

export default {
    state: {
        cart:[]
    },
    mutations: {
        //添加获取到的购物车数据到仓库里
        getCartList(state,data){
            state.cart = data
        }
    },
    actions: {
        //添加到购物车
        async addToCart(store,{skuId,skuNum}){
            //发送请求
            console.log(`skuId:${skuId},skuNum:${skuNum}`)
            const {code} = await addToCart(skuId,skuNum)
            //把状态码返回出去
            return code
        },
        //获取购物车数据
        async getCartList({commit}){
            const {data,code} =  await getCartList()
            commit('getCartList',data)
        },
        //更改选中状态
        changeCartChecked(){

        }
    },
    getters: {

    }
}