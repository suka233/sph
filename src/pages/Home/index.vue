<template>
<div>
  <TypeNav></TypeNav>
  <ListContainer></ListContainer>
  <TodayRecommend></TodayRecommend>
  <Rank></Rank>
  <Like></Like>
  <Floor1></Floor1>
  <Floor2></Floor2>
  <Brand></Brand>
</div>
</template>

<script>
import TypeNav from 'components/TypeNav'
import ListContainer from "./ListContainer"
import TodayRecommend from "./TodayRecommend"
import Rank from "./Rank"
import Like from "./Like"
import Floor1 from "./Floor1"
import Floor2 from "./Floor2"
import Brand from "./Brand"


export default {
  name: "Home",
  components:{
    TypeNav,
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor1,
    Floor2,
    Brand
  }
}
</script>

<style scoped>

</style>