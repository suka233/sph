<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
           v-for="(img,index) in skuInfo.skuImageList"
           :key="index">
        <img :src="img.imgUrl">
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
// 个人遇到的Bug:做轮播图的时候,图片总是没有水平居中,swiper配置项也没有问题,不知道怎么解决
// 老师是这样解决的:先看为什么会没有水平居中,F12发现其实div是已经水平居中了的,但是div中的img没有水平居中
// 所以只需要给div下的img设置margin:auto即可水平居中了
import Swiper from 'swiper/swiper-bundle.min.js'


export default {
  name: "ImageList",
  props: ["skuInfo"],
  watch:{
    skuInfo:{
      handler(val){
        //val代表watch的最新值,如果skuImageList不是数组,为了减少$nextTick带来的资源浪费,直接不执行
        // if(val.skuImageList.length <= 0) return

        //$nextTick中的回调,必定会等到banners数据变化所引起的界面更新完成后才会执行!
        this.$nextTick(()=>{
          new Swiper (this.$refs.swiper, {
            // 水平切换选项
            direction: 'horizontal',

            //每行显示多少个
            slidesPerView :5,

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

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;
      margin: auto;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;

    &::after {
      font-size: 12px;
    }
  }
}
</style>