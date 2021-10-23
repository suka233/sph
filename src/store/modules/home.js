import {getBaseCategoryList} from 'http'

export default {
    state:{
        categoryList:[]
    },
    mutations:{
        getCategoryList(state,categoryList){
            state.categoryList = categoryList
        }
    },
    actions:{
        async getCategoryList({commit}){
            const {data} = await getBaseCategoryList()
            commit('getCategoryList',data)
        }
    },
    getters:{

    }
}