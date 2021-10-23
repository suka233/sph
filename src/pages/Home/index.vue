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
import TypeNav from 'components/Home/TypeNav'
import ListContainer from "components/Home/ListContainer"
import TodayRecommend from "components/Home/TodayRecommend"
import Rank from "components/Home/Rank"
import Like from "components/Home/Like"
import Floor1 from "components/Home/Floor1"
import Floor2 from "components/Home/Floor2"
import Brand from "components/Home/Brand"


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