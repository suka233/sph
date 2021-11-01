<template>
<div>
  <TypeNav></TypeNav>
  <ListContainer></ListContainer>
  <TodayRecommend></TodayRecommend>
  <Rank></Rank>
  <Like></Like>
  <Floor v-for="floor in floors" :key="floor.id" :floor="floor"></Floor>
  <Brand></Brand>
</div>
</template>

<script>
import {mapState} from "vuex";
import TypeNav from 'components/TypeNav'
import ListContainer from "./ListContainer"
import TodayRecommend from "./TodayRecommend"
import Rank from "./Rank"
import Like from "./Like"
import Floor from './Floor'
import Brand from "./Brand"


export default {
  name: "Home",
  components:{
    TypeNav,
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  computed:{
    ...mapState({floors: state => state.home.floors})
  }
}
</script>

<style scoped>

</style>