import {getDetail} from 'http'

export default {
    state: {
        detail: {}
    },
    mutations: {
        getDetail(state,detail){
            state.detail = detail
        },
        changeChecked(state,{indexWrap,indexInner}){
            //先让同组的checked都变为0
            state.detail.spuSaleAttrList[indexWrap].spuSaleAttrValueList.forEach((item)=>{
                item.isChecked ='0'
            })
            //再让选定的项目的checked都变为1
            state.detail.spuSaleAttrList[indexWrap].spuSaleAttrValueList[indexInner].isChecked = "1"
        }
    },
    actions: {
        //获取商品列表
        async getDetail({commit},skuId){
            const {data} = await getDetail(skuId)
            commit('getDetail',data)
        },
        //更改相应的checked状态
        changeChecked({commit},{indexWrap,indexInner}){
            commit('changeChecked',{indexWrap,indexInner})
        }
    },
    getters: {
        categoryView(state){
            return state.detail.categoryView ? state.detail.categoryView : {}
        },
        skuInfo(state){
            return state.detail.skuInfo ? state.detail.skuInfo : {}
        },
        skuImageList(state,getters){
            return getters.skuInfo.skuImageList ? getters.skuInfo.skuImageList : []
        }
    }
}