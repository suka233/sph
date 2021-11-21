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
            // const {data} = await getBaseCategoryList()
            //上面的那个是mock的接口,下面的是我自己写的接口
            //由于我自己写的接口不太规范,直接返回数据,也没有状态码啥的,规范的数据应该封装在data内!并附上状态码!
            const data = await getBaseCategoryList()
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