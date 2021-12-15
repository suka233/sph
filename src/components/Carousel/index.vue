<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carouselList in list"
           :key="carouselList.id">
        <img :src="carouselList.imgUrl">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min.js'
//组件使用条件:
// 1.已经在全局下引入了swiper的css样式
// 2.传入一个名为list的数组,数组内必须有id和imgUrl
export default {
  name: "Carousel",
  props:{
    list:Array
  },
  watch:{
    list:{
      handler(val){
        //val代表watch的最新值,如果banners不是数组,为了减少$nextTick带来的资源浪费,直接不执行
        if(val.length <= 0) return

        //$nextTick中的回调,必定会等到banners数据变化所引起的界面更新完成后才会执行!
        this.$nextTick(()=>{
          new Swiper (this.$refs.swiper, {
            direction: 'horizontal', // 水平切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          })
        })
      },
      deep:true,
      immediate:true
    }
  }
}
</script>

<style scoped>

</style>