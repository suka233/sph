<template>
  <div>
    test
    {{testZong}}
    {{testFeng}}
    <br>
    <button @click="updateA('a')">testZong</button>
    <button @click="updateB('b')">testFeng</button>
  </div>
</template>

<script>
import {getBaseCategoryList,getBanners,getFloors} from 'http';
import {mapState,mapActions} from 'vuex'
export default {
  name: "test",
  data(){
    return{

    }
  },
  async created() {
    const body = await getBaseCategoryList();
    const body2 = await getBanners();
    const body3 = await getFloors();
    // console.log(body);
    console.log(body,body2,body3);
  },
  computed:{
    //总仓库的辅助函数
    ...mapState(['testZong']),
    //分仓库的辅助函数
    ...mapState({testFeng:(state)=>{return state.a.testFeng}})
  },
  methods:{
    ...mapActions(['updateA','updateB'])
  }
}
</script>

<style scoped>

</style>