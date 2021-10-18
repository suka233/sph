// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex);

//遇到的坑:分仓库不再需要再次new一个新仓库,它只需要安静的挂载在主仓库下,做一个安静的美男仓即可~~hhhh
export default {
    state:{
        testFeng:"testFeng"
    },
    getters:{

    },
    mutations:{
        updateB(state,msg){
            state.testFeng = msg
        }
    },
    actions:{
        updateB({commit},msg){
            commit('updateB',msg)
        }
    },
}