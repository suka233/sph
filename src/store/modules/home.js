import {getBaseCategoryList,getBanners,getFloors} from 'http'

export default {
    state:{
        categoryList:[],
        banners:[],
        floors:[]
    },
    mutations:{
        getCategoryList(state,categoryList){
            state.categoryList = categoryList
        },
        getBanners(state,banners){
            state.banners = banners
        },
        getFloors(state,floors){
            state.floors = floors
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
        },
        //楼层数据
        async getFloors({commit}){
            const {data} = await getFloors()
            commit('getFloors',data)
        }
    },
    getters:{

    }
}