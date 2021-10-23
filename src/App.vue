<template>
  <div id="app">
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
    ...mapActions(["getCategoryList"])
},
  created() {
    this.getCategoryList();
  }
}
</script>

<style>

</style>
