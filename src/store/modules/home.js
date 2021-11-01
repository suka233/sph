import {getBaseCategoryList,getBanners} from 'http'

export default {
    state:{
        categoryList:[],
        banners:[]
    },
    mutations:{
        getCategoryList(state,categoryList){
            state.categoryList = categoryList
        },
        getBanners(state,banners){
            state.banners = banners
        }
    },
    actions:{
        //获取三级列表
        async getCategoryList({commit}){
            const {data} = await getBaseCategoryList()
            commit('getCategoryList',data)
        },
        //获取轮播图
        async getBanners({commit}){
            const {data} = await getBanners()
            commit('getBanners',data)
        }
    },
    getters:{

    }
}