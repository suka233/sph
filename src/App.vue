<template>
  <div id="app">
<!--    <Stars size="24" :score="4.1" :length="6"></Stars>-->
<!--    <Icon type="invoice" :size="12" styles="solid"></Icon>-->
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.hideFooter"></Footer>
  </div>
</template>

<script>

import Header from 'components/Header'
import Footer from 'components/Footer'
import {mapActions} from 'vuex'
// import {getBaseCategoryList} from 'http'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
methods:{
    ...mapActions(["getCategoryList","getBanners","getFloors"])
},
  created() {
    this.getCategoryList();
    this.getBanners();
    this.getFloors();
  }
}
</script>

<style>

</style>